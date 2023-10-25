import React, { FC, useState , useEffect } from 'react';
import Title from '../../components/TextComponents/Title/Title';
import ProductCard from '../../components/ProductCards/ProductCard/ProductCard';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IProduct } from '../../../store/types';
import { useActions } from '../../../store/Hooks/useActions';
import { PageWrapper , PageTitle , PageContent } from './styles';
import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock';
import PaginationBar from '../../components/Pagination/Pagination';

const AllBooksPage = () => {
    const products = useTypedSelector(state => state.products.allProducts);
    const { getProductsAsync } = useActions();
    const productsCount = useTypedSelector(state => state.pagination.productsCount);

    const pagesCount = Math.ceil(+productsCount / 10);

    useEffect(() => {
        getProductsAsync();
    }, []);

    return (
        <PageWrapper>
            <PageTitle>
                <Title variant='h1'>ALL BOOKS</Title>
            </PageTitle>
            
            <PageContent>
                {products && products.map((productInfo:IProduct) => <ProductCard productInfo = {productInfo} key = {productInfo.isbn13}/>)}
            </PageContent>

            <PaginationBar count={pagesCount} onBtnClick={(event, page) => {getProductsAsync(page)}}></PaginationBar>

            <SubscribeBlock></SubscribeBlock>
        </PageWrapper>
    );
};

export default AllBooksPage;