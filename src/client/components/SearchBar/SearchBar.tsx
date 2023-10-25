import React, { FC, useState , useEffect } from 'react';
import { useActions } from '../../../store/Hooks/useActions';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBarWrapper , SearchInput , SearchButton } from './styles';

const SearchBar = () => {
    const [value, setValue] = useState();
    const { getProductsAsync , searchProductsAsync } = useActions();

    const handleChangeValue = (event:any) => {
        setValue(event?.target.value);

        if(!event.target.value) {
            getProductsAsync()
        }
    };

    const handleSearch = () => {
        if (value) {
            searchProductsAsync(value)
        } 
    };

    return (
        <SearchBarWrapper>
            <SearchInput placeholder='Search' value={value} onChange={handleChangeValue}></SearchInput>
            <SearchButton onClick={handleSearch}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </SearchButton>    
        </SearchBarWrapper>
    );
};

export default SearchBar;