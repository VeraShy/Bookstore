import React, { FC, useState , useEffect, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import BackLink from '../../components/Buttons/BackLinkButton/BackLink';
import Title from '../../components/TextComponents/Title/Title';
import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
import Alert from '@mui/material/Alert';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { auth } from '../../../firebaseConfig';
import { User } from 'firebase/auth';
import { useActions } from '../../../store/Hooks/useActions';
import { AuthErrorType } from '../../../store/types';
import { passwordValidator } from '../../helpers';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import SignUpPage from '../RegistrationPage/RegistrationPage';
import { PageWrapper, PageTitle, PageContent, FormContent, FormSection, LabelWithButton, InputBlock, InputGroup, InputField, TextField,
    EditButton, ButtonsSection, ButtonsBlock, ButtonWrapper, ErrorMessage } from './styles';

const user: User | null = auth.currentUser;

const currentUserData = {
    displayName: user?.displayName,
    email: user?.email,
    password: '',
    newPassword: '',
};

const accountErrors: AuthErrorType = {
    displayName: '',
    email: '',
    password: '',
    newPassword: '',
};

const UserAccountPage = () => {
    const [newName, setNewName] = useState('');
    const [currentPassword, setCurrentPassword] = useState(currentUserData.password);
    const [newPassword, setNewPassword] = useState(currentUserData.newPassword);
    const [openNameChange, setOpenNameChange] = useState(false);
    const [openPasswordChange, setOpenPasswordChange] = useState(false);
    const [accountError, setAccountError] = useState(accountErrors);
    const errorMessage = useTypedSelector(state => state.account.passwordChangeError);
    const { userSignOut , changeUserName , changePassword , resetAccountStatus} = useActions();
    const { isNameChangeSuccess , isPasswordChangeSuccess } = useTypedSelector(state => state.account);
    const isSiggnedIn = useTypedSelector(state => state.signIn.isSignedIn);
    const { mobile , tablet , laptop } = useMediaQueries();
    const navigate = useNavigate();

    const user: User | null = auth.currentUser;
   
    const openNameChangeInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setOpenNameChange(true);
    };

    const openPasswordChangeInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setOpenPasswordChange(true);
    };

    const validateAccountInput = () => {
        const passwordError = passwordValidator(currentPassword);
        const newPasswordError = passwordValidator(newPassword);

        setAccountError({
            ...accountErrors,
            password: passwordError,
            newPassword: newPasswordError,
        });
        
        if(currentPassword && !newPassword) {
            setAccountError({
                ...accountErrors,
                newPassword: 'Please enter new password',
            });

            return
        };
    };

    const showAccountServerErrors = () => {
        if(errorMessage && errorMessage === "Firebase: Error (auth/invalid-login-credentials).") {
            setAccountError({
                ...accountErrors,
                password: 'You have entered an incorrect password',
            });
        } else if (errorMessage && errorMessage === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
            setAccountError({
                ...accountErrors,
                password: 'Account has been temporarily disabled due to many failed login attempts. Try again later.',
            });
        };

        return accountError;
    };

    const handleSaveChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if(newName && !currentPassword && !newPassword) {
            changeUserName(newName);
        };

        if(currentPassword && newPassword) {
            validateAccountInput();
            changePassword(currentPassword, newPassword);
        };

        if(newName && currentPassword && newPassword) {
            changeUserName(newName);
            validateAccountInput();
            changePassword(currentPassword, newPassword);
        };

        userSignOut();
    };

    useEffect(() => {
        if(!isPasswordChangeSuccess && errorMessage) {
            showAccountServerErrors();
        };

        if(isNameChangeSuccess) {
            setOpenNameChange(false);
            resetAccountStatus();
        };

        if(isPasswordChangeSuccess) {
            setOpenPasswordChange(false);
            resetAccountStatus();
        };

        if(isNameChangeSuccess && isPasswordChangeSuccess) {
            setOpenNameChange(false);
            setOpenPasswordChange(false);
            resetAccountStatus();
        };

    }, [isNameChangeSuccess, isPasswordChangeSuccess, errorMessage]);

    const clearInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setCurrentPassword('');
        setNewPassword('');
        setOpenNameChange(false);
        setOpenPasswordChange(false);
    };

    const handleSignOut = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        userSignOut();
        //navigate('/');
    };

    return user ? (
        <PageWrapper>
            <BackLink />
            <PageTitle>
                { mobile ? <Title variant='h1'>account</Title> : <Title variant='h2'>account</Title> }
            </PageTitle>

            <PageContent>
                <FormContent>
                    <FormSection>
                        <Title variant='p'>profile</Title> 
                        <InputBlock>
                            <InputGroup>
                                <LabelWithButton>
                                    <label>Name</label>
                                    <EditButton onClick={event => openNameChangeInput(event)}><EditOutlinedIcon color='disabled'/></EditButton>
                                </LabelWithButton>
                                <TextField>{user.displayName}</TextField>
                                <ErrorMessage>{}</ErrorMessage> 
                                {isNameChangeSuccess && (<Alert severity="success">Your name has been changed!</Alert>)}  
                            </InputGroup>
                            
                            {openNameChange && (
                                <InputGroup>
                                    <label>New name</label>
                                    <InputField
                                        type = 'text'
                                        value = {newName}
                                        onChange = {event => setNewName(event.target.value)}/>
                                    <ErrorMessage>{accountError.displayName}</ErrorMessage> 
                                </InputGroup>
                            )}                           
                        </InputBlock>

                        <InputBlock>
                            <InputGroup>
                                <label>Email</label>
                                <TextField>{user.email}</TextField>
                            </InputGroup>
                        </InputBlock>
                    </FormSection>

                    <FormSection>
                        <Title variant='p'>password</Title>
                        <InputBlock>
                            <InputGroup>
                                <LabelWithButton>
                                    <label>Password</label>
                                    <EditButton onClick={event => openPasswordChangeInput(event)}><EditOutlinedIcon color='disabled'/></EditButton>
                                </LabelWithButton>
                                <InputField
                                    type = 'password'
                                    placeholder='Enter your current password'
                                    value = {currentPassword}
                                    onChange = {event => setCurrentPassword(event.target.value)} />
                                <ErrorMessage>{accountError.password}</ErrorMessage>
                                {isPasswordChangeSuccess && (<Alert severity="success">Password has been changed!</Alert>)} 
                            </InputGroup>

                            {openPasswordChange && 
                                (<InputGroup>
                                    <label>New password</label>
                                    <InputField
                                        type = 'password'
                                        placeholder='Enter new password'
                                        value = {newPassword}
                                        onChange = {event => setNewPassword(event.target.value)} />
                                    <ErrorMessage>{accountError.newPassword}</ErrorMessage>   
                                </InputGroup>
                                )}
                        </InputBlock>
                    </FormSection>
                    
                    <ButtonsSection>
                        <ButtonsBlock>
                            <ButtonWrapper>
                                <CustomButton 
                                    isActive = {true} 
                                    content = {'save changes'} 
                                    variant = 'filled'
                                    onBtnClick = {handleSaveChanges} />  
                            </ButtonWrapper>
                            <ButtonWrapper>
                                <CustomButton 
                                    isActive = {true} 
                                    content = {'cancel'} 
                                    variant = 'outlined'
                                    onBtnClick = {event => clearInputs(event)} 
                                    /> 
                            </ButtonWrapper>
                        </ButtonsBlock>
                        <ButtonsBlock>
                            <ButtonWrapper>
                                <CustomButton 
                                    isActive = {true} 
                                    content = {'sign out'} 
                                    variant = 'filled'
                                    onBtnClick = {handleSignOut} /> 
                            </ButtonWrapper>
                        </ButtonsBlock>
                    </ButtonsSection>                               
                </FormContent>                                                     
            </PageContent>            
        </PageWrapper>
    ) : (<SignUpPage />);
};

export default UserAccountPage;