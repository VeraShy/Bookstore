import React, { FC, useState , useEffect } from 'react';
import Title from '../../components/TextComponents/Title/Title';
import ProductCard from '../../components/ProductCards/ProductCard/ProductCard';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IProduct } from '../../../store/types';
import { useActions } from '../../../store/Hooks/useActions';
import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import { PageWrapper , PageTitle , PageContent } from './styles';

const NewBooksPage = () => {
    const products = useTypedSelector(state => state.products.newProducts);
    const { getNewProductsAsync } = useActions();
    const { mobile , tablet , laptop } = useMediaQueries();

    useEffect(() => {
        getNewProductsAsync();
    }, []);

    return (
        <PageWrapper>
            <PageTitle>
                { mobile ? <Title variant='h1'>NEW RELEASES BOOKS</Title> : <Title variant='h2'>NEW RELEASES BOOKS</Title> }
            </PageTitle>
            
            <PageContent>
                {products && products.map((productInfo:IProduct) => <ProductCard productInfo = {productInfo} key = {productInfo.isbn13}/>)}
            </PageContent>

            <SubscribeBlock></SubscribeBlock>
        </PageWrapper>
    );
};

export default NewBooksPage;