import React, { FC, useState , useEffect } from 'react';
import Title from '../../components/TextComponents/Title/Title';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import { PageWrapper , PageTitle } from './styles';

const NotFoundPage = () => {
    const { mobile , tablet , laptop } = useMediaQueries();

    return (
        <PageWrapper>
            <PageTitle>
                { mobile ? <Title variant='h1'>page not found</Title> : <Title variant='h2'>page not found</Title> }
            </PageTitle>
        </PageWrapper>
    );
};

export default NotFoundPage;