import React, { FC, useState , useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BackLink from '../../components/Buttons/BackLinkButton/BackLink';
import Title from '../../components/TextComponents/Title/Title';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomInputAsDiv from '../../components/CustomInput/CustomInputAsDiv';
import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
import Alert from '@mui/material/Alert';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { auth } from '../../../firebaseConfig';
import { User } from 'firebase/auth';
import { useActions } from '../../../store/Hooks/useActions';
import SignUpPage from '../SignUpPage/SignUpPage';
import { UserDataType , AuthErrorType } from '../../../store/types';
import { passwordValidator } from '../../helpers';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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
    //const [accountError, setAccountError] = useState(accountErrors);
    const { userSignOut , changeUserName , changePassword } = useActions();
    const { errorMessage } = useTypedSelector(state => state.errors);

    const user: User | null = auth.currentUser;
    const { isNameChanged , isPasswordChanged } = useTypedSelector(state => state.session);

    const openNameChangeInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setOpenNameChange(true);
    };

    const openPasswordChangeInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setOpenPasswordChange(true);
    };

    // const validateInput = () => {
    //     const passwordError = passwordValidator(currentPassword);
    //     const newPasswordError = passwordValidator(newPassword);

    //     if(errorMessage && errorMessage === "Firebase: Error (auth/invalid-login-credentials).") {
    //         setAccountError({
    //             ...accountErrors,
    //             password: 'You have entered an incorrect password',
    //         });
    //         return;
    //     } else {
    //         setAccountError({
    //             ...accountErrors,
    //             password: passwordError,
    //             newPassword: newPasswordError,
    //         });
    //         return;
    //     };
    // };

    const validateInput = () => {
        const passwordError = passwordValidator(currentPassword);
        const newPasswordError = passwordValidator(newPassword);

        if(errorMessage && errorMessage === "Firebase: Error (auth/invalid-login-credentials).") {
            accountErrors.password = 'You have entered an incorrect password';
        } else if(errorMessage && errorMessage === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
            accountErrors.newPassword = 'Too many attempts, please try again later';
        } else {
            accountErrors.password = passwordError;
            accountErrors.newPassword = newPasswordError;
        };

        return accountErrors;
    };

    const handleSaveChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        if(newName && !currentPassword && !newPassword) {
            changeUserName(newName);
            setOpenNameChange(false);
        };

        if(currentPassword && newPassword) {
            validateInput();
            changePassword(currentPassword, newPassword);
        };
    };

    const clearInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setCurrentPassword('');
        setNewPassword('');
        setOpenNameChange(false);
        setOpenPasswordChange(false);
        console.log('clear')
    };

    const handleSignOut = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        userSignOut();
    };

    return user ? (
        <PageWrapper>
            <BackLink />
            <PageTitle>
                <Title variant='h1'>account</Title>
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
                                {isNameChanged && (<Alert severity="success">Your name has been changed!</Alert>)} 
                            </InputGroup>
                            
                            {openNameChange && (
                                <InputGroup>
                                    <label>New name</label>
                                    <InputField
                                        type = 'text'
                                        value = {newName}
                                        onChange = {event => setNewName(event.target.value)}/>
                                    <ErrorMessage>{accountErrors.displayName}</ErrorMessage> 
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
                                <ErrorMessage>{accountErrors.password}</ErrorMessage>
                            </InputGroup>

                            {openPasswordChange && 
                                (<InputGroup>
                                    <label>New password</label>
                                    <InputField
                                        type = 'password'
                                        placeholder='Enter new password'
                                        value = {newPassword}
                                        onChange = {event => setNewPassword(event.target.value)} />
                                    <ErrorMessage>{accountErrors.newPassword}</ErrorMessage>   
                                </InputGroup>
                                )}
                        </InputBlock>
                    </FormSection>
                    
                    <ButtonsSection>
                        
                        {isPasswordChanged && (<Alert severity="success">Your password has been changed!</Alert>)}
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
    ) : <SignUpPage /> ;
};

export default UserAccountPage;