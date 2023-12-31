import React, { FC, useState , useEffect } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { useActions } from '../../../store/Hooks/useActions';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { UserDataType , AuthErrorType } from '../../../store/types';
import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import TextMessage from '../../components/TextComponents/TextMessage/TextMessage';
import Title from '../../components/TextComponents/Title/Title';
import { nameValidator , emailValidator , passwordValidator } from '../../helpers';
import { TabsWrapper , TabsButtons , TabButton , TabsContent , TabContent } from './styledTabs';
import { PageWrapper , FormWrapper , FormTitle , FormContent , InputGroup , InputSubmitButton , ErrorMessage } from './styles';

const emptyUserData: UserDataType = {
    displayName: '',
    email: '',
    password: '',
};

const registrationErrors: AuthErrorType = {
    displayName: '',
    email: '',
    password: '',
};

const SignUpPage = () => {
    const [signUpData, setSignUpData] = useState(emptyUserData);
    const [signUpError, setSignUpError] = useState(registrationErrors);
    const [signInData, setSignInData] = useState(emptyUserData);
    const [signInError, setSignInError] = useState(registrationErrors);
    const { isSignUpSuccessful , userSignUpData } = useTypedSelector(state => state.signUp);
    const signUpErrorMessage = useTypedSelector(state => state.signUp.signUpError);
    const { isSignedIn , userSignInData } = useTypedSelector(state => state.signIn);
    const signInErrorMessage = useTypedSelector(state => state.signIn.signInError);
    const { userSignUp , userSignIn } = useActions();
    const navigate = useNavigate();

    const handleSetSignUpData = (
        fieldname: keyof typeof emptyUserData,
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSignUpData((prevData) => {
            return {...prevData, [fieldname]: event.target.value}
        });
    };

    const validateSignUpInput = () => {
        const userNameError = nameValidator(signUpData.displayName)
        const emailError = emailValidator(signUpData.email);
        const passwordError = passwordValidator(signUpData.password);

        setSignUpError({
            ...registrationErrors,
            displayName: userNameError,
            email: emailError,
            password: passwordError,
        });
    };

    const showSignUpServerErrors = () => {
        if(signUpErrorMessage && signUpErrorMessage === "Firebase: Error (auth/email-already-in-use).") {
            setSignUpError({
                ...registrationErrors,
                email: 'Your email has already been used',
            });
        };

        return signUpError;
    };

    const handleSignUp = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        validateSignUpInput();

        if(signUpData.displayName && signUpData.email && signUpData.password) {
            userSignUp(signUpData);
        }; 
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        if(!isSignUpSuccessful && signUpErrorMessage) {
            showSignUpServerErrors();
        };

        if(isSignUpSuccessful) {
            navigate('/registration/registration-confirm');
        };
    }, [isSignUpSuccessful, signUpErrorMessage]);

    const handleSetSignInData = (
        fieldname: keyof typeof emptyUserData,
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSignInData((prevData) => {
            return {...prevData, [fieldname]: event.target.value}
        });
    };

    const validateSignInInput = () => {
        const emailError = emailValidator(signInData.email);
        const passwordError = passwordValidator(signInData.password);

        setSignInError({
            ...registrationErrors,
            email: emailError,
            password: passwordError,
        });
    };

    const showSignInServerErrors = () => {
        if(signInErrorMessage && signInErrorMessage === "Firebase: Error (auth/invalid-login-credentials).") {
            setSignInError({
                ...registrationErrors,
                password: 'Either your email or password is incorrect',
            });
        } else if (signInErrorMessage && signInErrorMessage === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
            setSignInError({
                ...registrationErrors,
                password: 'Account has been temporarily disabled due to many failed login attempts. Try again later.',
            });
        };

        return signInError;
    };

    const handleSignIn = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        validateSignInInput();

        if(signInData.email && signInData.password) {
            userSignIn(signInData);
        };
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        
        if(!isSignedIn && signInErrorMessage) {
            showSignInServerErrors();
        };

        if(isSignedIn) {
            navigate('/');
        };
    }, [isSignedIn, signInErrorMessage]);

    return (
        <PageWrapper>
            <FormWrapper>
                <TabsWrapper>
                    <TabsButtons>
                        <TabButton>
                            <FormTitle><Title variant='p'>sign in</Title></FormTitle>
                        </TabButton>
                        <TabButton>
                            <FormTitle><Title variant='p'>sign up</Title></FormTitle>
                        </TabButton>
                    </TabsButtons>

                    <TabsContent>
                        <TabContent>
                            <FormContent>
                                <InputGroup>
                                    <label>Email</label>
                                    <CustomInput 
                                        variant = 'outlined' 
                                        type = 'email' 
                                        placeholder = 'Your email'
                                        value = {signInData.email}
                                        onInputChange = {event => handleSetSignInData('email', event)} />
                                    <ErrorMessage>{signInError.email}</ErrorMessage>
                                </InputGroup>
                                
                                <InputGroup>
                                    <label>Password</label>
                                    <CustomInput 
                                        variant = 'outlined' 
                                        type = 'password' 
                                        placeholder = 'Your password'
                                        value = {signInData.password}
                                        onInputChange = {event => handleSetSignInData('password', event)} />
                                    <ErrorMessage>{signInError.password}</ErrorMessage>
                                </InputGroup>
                                
                                <TextMessage variant='p'>Forgot password?  <Link to='/password-reset'>Click here to reset.</Link></TextMessage>
                                
                                <InputSubmitButton>
                                    <CustomButton 
                                        isActive = {true} 
                                        content = {'sign in'} 
                                        variant = 'filled'
                                        onBtnClick = {event => handleSignIn(event)}/> 
                                </InputSubmitButton>
                            </FormContent>
                        </TabContent>

                        <TabContent>
                            <FormContent>
                                <InputGroup>
                                    <label>Name</label>
                                    <CustomInput 
                                        variant = 'outlined' 
                                        type = 'text' 
                                        placeholder = 'Your name' 
                                        value = {signUpData.displayName}
                                        onInputChange = {event => handleSetSignUpData('displayName', event)} />
                                    <ErrorMessage>{signUpError.displayName}</ErrorMessage> 
                                </InputGroup>

                                <InputGroup>
                                    <label>Email</label>
                                    <CustomInput 
                                        variant = 'outlined' 
                                        type = 'email' 
                                        placeholder = 'Your email'
                                        value = {signUpData.email}
                                        onInputChange = {event => handleSetSignUpData('email', event)} />
                                    <ErrorMessage>{signUpError.email}</ErrorMessage> 
                                </InputGroup>

                                <InputGroup>
                                    <label>Password</label>
                                    <CustomInput 
                                        variant = 'outlined' 
                                        type = 'password' 
                                        placeholder = 'Your password'
                                        value = {signUpData.password}
                                        onInputChange = {event => handleSetSignUpData('password', event)} />
                                    <ErrorMessage>{signUpError.password}</ErrorMessage> 
                                </InputGroup>

                                <InputSubmitButton>
                                    <CustomButton 
                                        isActive = {true} 
                                        content = {'sign up'}
                                        variant = 'filled' 
                                        onBtnClick = {event => handleSignUp(event)}/> 
                                </InputSubmitButton>
                            </FormContent>
                        </TabContent>
                    </TabsContent>
                </TabsWrapper>
            </FormWrapper>
        </PageWrapper>
    );
};

export default SignUpPage;