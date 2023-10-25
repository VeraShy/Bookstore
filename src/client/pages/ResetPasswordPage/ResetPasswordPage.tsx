import React, { FC, useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/TextComponents/Title/Title';
import TextMessage from '../../components/TextComponents/TextMessage/TextMessage';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
import { PageWrapper , FormWrapper , FormTitle , FormContent , InputGroup , InputSubmitButton , InformationField } from './styles';
import { useActions } from '../../../store/Hooks/useActions';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';

const ResetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const { resetPassword } = useActions();
    const { isResetEmailSent, resetPasswordEmail } = useTypedSelector(state => state.session);
    const navigate = useNavigate();

    const handleSendResetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        resetPassword(email);
    };

    return (
        <PageWrapper>
            <FormWrapper>
                <FormContent>
                    <FormTitle>
                        <Title variant='p'>reset password</Title>
                    </FormTitle>
                        {isResetEmailSent ? 
                            <InformationField>
                                <TextMessage variant='p'>You will receive a link to reset your password on <span>{email}</span> !</TextMessage>
                            </InformationField>
                            : null 
                        }
                    <InputGroup>
                        <label>Email</label>
                        <CustomInput 
                            variant = 'outlined' 
                            type = 'email' 
                            placeholder = 'Your email'
                            value = {email}
                            onInputChange = {(event) => setEmail(event.target.value)}
                             />
                    </InputGroup>
                    <InputSubmitButton>
                        {isResetEmailSent ?
                            <CustomButton 
                                isActive = {true} 
                                content = {'go to home'} 
                                variant = 'filled'
                                onBtnClick = {() => navigate('/')}
                                /> :
                            <CustomButton 
                                isActive = {true} 
                                content = {'reset'} 
                                variant = 'filled'
                                onBtnClick = {(event) => handleSendResetEmail(event)}
                                /> 
                        }
                    </InputSubmitButton>
                </FormContent>
            </FormWrapper>
        </PageWrapper>
    );
};

export default ResetPasswordPage;