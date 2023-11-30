import React, { FC, useState , useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../../store/Hooks/useActions';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { SearchBarWrapper , SearchInputWrapper , SearchInput , SearchButton, SearchResultsWrapper , ViewAllButton } from './styles';

const SearchBarOnClick = () => {
    const [value, setValue] = useState('');
    const { searchProductsAsync , searchInputActive , clearSearchInput} = useActions();
    const navigate = useNavigate();
    const searchPageURL = `/search/${value}`;

    const handleChangeValue = (event: any) => {
        setValue(event.target.value);
        searchInputActive();

        if(!event.target.value) {
            clearSearchInput();
        };
    };
    
    const handleSearch = () => {
        searchProductsAsync(value);
        navigate(searchPageURL);
    };

    return (
        <SearchBarWrapper>
            <SearchInputWrapper>
                <SearchInput placeholder='Search' onChange={handleChangeValue}></SearchInput>
                <SearchButton> <IconButton onClick={handleSearch}> <Search /> </IconButton> </SearchButton>
            </SearchInputWrapper>
        </SearchBarWrapper>
    );
};

export default SearchBarOnClick;