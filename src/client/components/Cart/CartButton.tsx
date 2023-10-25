import React from 'react';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IconButton } from '@mui/material';
import { StyledIcon , Indicator } from './styles';

const CartButton = () => {
    const inCartProducts = useTypedSelector(state => state.cart.inCartProducts);

    return (
        <IconButton>
            <StyledIcon />
            {inCartProducts.length ? <Indicator /> : null}
        </IconButton>
    );
};

export default CartButton;