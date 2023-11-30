import React, { FC, useState , useEffect } from 'react';
import Title from '../../components/TextComponents/Title/Title';
import ProductCard from '../../components/ProductCards/ProductCard/ProductCard';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IProduct } from '../../../store/types';
import { useActions } from '../../../store/Hooks/useActions';
import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock';
import PaginationBar from '../../components/Pagination/Pagination';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import { PageWrapper , PageTitle , PageContent } from './styles';

const AllBooksPage = () => {
    const products = useTypedSelector(state => state.products.allProducts);
    const { getProductsAsync } = useActions();
    const productsCount = useTypedSelector(state => state.pagination.productsCount);
    const { mobile , tablet , laptop } = useMediaQueries();

    const pagesCount = Math.ceil(+productsCount / 10);

    useEffect(() => {
        window.scrollTo(0, 0);
        getProductsAsync();
    }, []);

    return (
        <PageWrapper>
            <PageTitle>
                { mobile ? <Title variant='h1'>all books</Title> : <Title variant='h2'>all books</Title> }
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