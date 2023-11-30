import React, { FC, PropsWithChildren } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ContentWrapper } from './styles';

const Layout: FC<PropsWithChildren> = () => {
    return (
        <div>
            <Header />
            <ContentWrapper>
                <Outlet />
            </ContentWrapper>
            <Footer />
        </div>
    );
};

export default Layout;