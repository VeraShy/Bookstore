import React, { FC, useState , useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../store/Hooks/useActions';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IProduct } from '../../../store/types';
import { IconButton } from '@mui/material';
import { Search, Close } from '@mui/icons-material';
import SearchResultsCard from '../ProductCards/SearchResultsCard/SearchResultsCard';
import { SearchBarWrapper , SearchInputWrapper , SearchInput , SearchButton, SearchResultsWrapper , ViewAllButton } from './styles';

function debounce (f:any, ms:number) {
    let timeout:any;

    return function () {
        //@ts-ignore
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => f.apply(context, args), ms)
    };
};

const SearchBar = () => {
    const [value, setValue] = useState('');
    const [openDrop, setOpenDrop] = useState(false);
    const { searchProductsAsync , searchInputActive , clearSearchInput} = useActions();
    const { isSearchActive } = useTypedSelector(state => state.search);
    const searchResults = (useTypedSelector(state => state.search.searchResults)).slice(0, 5);
    const navigate = useNavigate();
    const searchPageURL = `/search/${value}`;

    const handleChangeValue = (event: any) => {
        setValue(event.target.value);
        searchInputActive();

        if(!event.target.value) {
            clearSearchInput();
        };
    };

    const debouncedOnChange = useCallback(debounce(handleChangeValue, 500), []);

    useEffect(() => {
        if(value) {
            searchProductsAsync(value);
            setOpenDrop(true);
        };   
    }, [value]);

    const handleViewAll = () => { 
        setValue('');
        clearSearchInput();
        navigate(searchPageURL);
    };

    const handleCloseDropdown = () => {
        setOpenDrop(false);
        setValue('');
        clearSearchInput();
    };

    return (
        <SearchBarWrapper>
            <SearchInputWrapper>
                <SearchInput placeholder='Search' onChange={debouncedOnChange}></SearchInput>
                <SearchButton> <IconButton onClick={handleCloseDropdown}>{openDrop ? <Close /> : <Search />}</IconButton> </SearchButton>
            </SearchInputWrapper>

            {isSearchActive && openDrop && (
            <SearchResultsWrapper>
                {searchResults && searchResults.map((productInfo: IProduct) => <div onClick={handleCloseDropdown}><SearchResultsCard productInfo={productInfo} key={productInfo.isbn13}/></div>)}
                <ViewAllButton onClick={handleViewAll}> All results </ViewAllButton>
            </SearchResultsWrapper>
            )}
        </SearchBarWrapper>
    );
};

export default SearchBar;