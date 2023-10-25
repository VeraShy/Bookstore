import React, { FC, useState , useEffect } from 'react';
import Title from '../../components/TextComponents/Title/Title';
import ProductCard from '../../components/ProductCards/ProductCard/ProductCard';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IProduct } from '../../../store/types';
import { useActions } from '../../../store/Hooks/useActions';
import { PageWrapper , PageTitle , PageContent } from './styles';
import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock';

const NewBooksPage = () => {
    const products = useTypedSelector(state => state.products.newProducts);
    const { getNewProductsAsync } = useActions();

    useEffect(() => {
        getNewProductsAsync();
    }, []);

    return (
        <PageWrapper>
            <PageTitle>
                <Title variant='h1'>NEW RELEASES BOOKS</Title>
            </PageTitle>
            
            <PageContent>
                {products && products.map((productInfo:IProduct) => <ProductCard productInfo = {productInfo} key = {productInfo.isbn13}/>)}
            </PageContent>

            <SubscribeBlock></SubscribeBlock>
        </PageWrapper>
    );
};

export default NewBooksPage;