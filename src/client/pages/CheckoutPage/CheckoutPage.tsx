import React, { FC, useState , useEffect } from 'react';
import Title from '../../components/TextComponents/Title/Title';
import { PageWrapper , PageTitle , PageContent } from './styles';

const CheckoutPage = () => {
    return (
        <PageWrapper>
            <PageTitle>
                <Title variant='h1'>payment details</Title>
                <Title variant='p'> page is shown only if a user is registered</Title>
            </PageTitle>
        </PageWrapper>
    );
};

export default CheckoutPage;