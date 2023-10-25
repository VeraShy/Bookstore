import React, { FC, useEffect } from 'react';
import { Navigate , Link } from 'react-router-dom';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { useActions } from '../../../store/Hooks/useActions';
import { UserDataType } from '../../../store/types';
import Title from '../../components/TextComponents/Title/Title';
import TextMessage from '../../components/TextComponents/TextMessage/TextMessage';
import { PageWrapper , PageTitle , PageContent } from './styles';

const RegistrationConfirmPage = () => {
    const { userSignUpData } = useTypedSelector(state => state.signUp);
    const { resetSignUpStatus } = useActions();

    useEffect(() => {
        resetSignUpStatus();
    }, []);

    return (
        <PageWrapper>
            <PageTitle>
                <Title variant='h1'>Congratulations, {userSignUpData?.user.displayName}!</Title>
            </PageTitle>

            <PageContent>
                <TextMessage variant='h6'>
                    Your registration is now completed!<br />
                    Enjoy shopping with BOOKSTORE!
                </TextMessage>
            </PageContent>
        </PageWrapper>
    );
};

export default RegistrationConfirmPage;