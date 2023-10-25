import React from 'react';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IconButton } from '@mui/material';
import { StyledIcon , Indicator } from './styles';

const FavouritesButton = () => {
    const favouriteProducts = useTypedSelector(state => state.products.favouriteProducts);

    return (
        <IconButton>
            <StyledIcon />
            {favouriteProducts.length ? <Indicator /> : null}
        </IconButton>
    );
};

export default FavouritesButton;