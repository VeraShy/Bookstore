import React, { FC, useState , useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useActions } from '../../../store/Hooks/useActions';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IProduct } from '../../../store/types';
import Title from '../../components/TextComponents/Title/Title';
import ProductCard from '../../components/ProductCards/ProductCard/ProductCard';
import PaginationBar from '../../components/Pagination/Pagination';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import { PageWrapper , PageTitle , PageContent } from './styles';

const SearchResultsPage = () => {
    const [page, setPage] = useState(1);
    const searchResults = useTypedSelector(state => state.search.searchResults);
    const { value } = useParams();
    const { searchProductsAsync } = useActions();
    const productsCount = useTypedSelector(state => state.pagination.productsCount);
    const [searchParams, setSearchParams] = useSearchParams();
    const pageNumber = searchParams.get('page');
    const { mobile , tablet , laptop } = useMediaQueries();

    const pagesCount = Math.ceil(+productsCount / 10);

    const handleChangePage = (event:any, page: number) => {
        //@ts-ignore
        setPage(page);
        searchProductsAsync(value, page);
        //@ts-ignore
        setSearchParams({ page: page });
    };

    return (
        <PageWrapper>
            <PageTitle>
                { mobile ? <Title variant='h1'>'{value}' search results</Title> : <Title variant='h2'>'{value}' search results</Title> }
            </PageTitle>
            
            <PageContent>
                {searchResults && searchResults.map((productInfo:IProduct) => <ProductCard productInfo = {productInfo} key = {productInfo.isbn13}/>)}
            </PageContent>

            <PaginationBar count={pagesCount} page={page} onBtnClick={handleChangePage}></PaginationBar>
        </PageWrapper>
    );
};

export default SearchResultsPage;