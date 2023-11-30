import React, { FC, useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/TextComponents/Title/Title';
import ProductCard from '../../components/ProductCards/ProductCard/ProductCard';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IProduct } from '../../../store/types';
import { useActions } from '../../../store/Hooks/useActions';
import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock';
import NavigationButton from '../../components/Buttons/NavigationButton/NavigationButton';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import { PageWrapper , PageTitle , PageContent , PageNavigation , EmptyCard } from './styles';

const MainPage = () => {
    const products = useTypedSelector(state => state.products.allProducts);
    const { getProductsAsync } = useActions();
    const { mobile , tablet , laptop } = useMediaQueries();

    useEffect(() => {
        window.scrollTo(0, 0);
        getProductsAsync();
    }, []);

    return (
        <PageWrapper>
            <PageTitle>
                { mobile ? (
                    <div>                    
                        <Title variant='h1'>WELCOME TO IT BOOKSTORE</Title>
                        <Title variant='h2'>IT, Programming and Computer Science Books</Title>
                    </div>
                ) : (
                    <div>
                        <Title variant='h2'>WELCOME TO IT BOOKSTORE</Title>
                    </div>
                )    
                }
            </PageTitle>

            <PageNavigation>
                <Link to = '/all-books'><NavigationButton content={'All Books'} /></Link>
                <Link to = '/new'><NavigationButton content={'New Releases'} /></Link>
                <NavigationButton content={'Free e-books'} />
            </PageNavigation>
            
            <PageContent>
                {products && products.map((productInfo:IProduct) => <ProductCard productInfo = {productInfo} key = {productInfo.isbn13}/>)}
                <EmptyCard><Link to='/all-books'>{'View all'}</Link></EmptyCard>
            </PageContent>

            <SubscribeBlock></SubscribeBlock>
        </PageWrapper>
    );
};

export default MainPage;