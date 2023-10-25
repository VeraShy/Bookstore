import styled from "styled-components";
import { builtinModules } from 'module';
import { FavoriteBorder , Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const CardWrapper = styled('div') `
    width: 100%;
    height: 192px;
    display: flex;
`

export const ImageBlock = styled('div') `
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.palette.additional.blue};
`

export const ProductImage = styled('img') `
    width: 165px;
    height: 190px;
    display: block;
`

export const InfoBlock = styled('div') `
    width: 55%;
    height: 100%;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const ProductTitle = styled('div') `
    padding-bottom: 10px;
`

export const ProductDescription = styled('div') `
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: ${(props) => props.theme.palette.system.secondary};
    padding-bottom: 24px;
`

export const ProductQuantity = styled('div') `
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
`

export const MinusButton = styled('button') `
    background-color: transparent;
    border: none;
    font-size: 26px;
`

export const PlusButton = styled('button') `
    background-color: transparent;
    border: none;
    font-size: 26px;
`

export const Quantity = styled('div') `
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    color: ${(props) => props.theme.palette.system.primary};
`

export const PriceBlock = styled('div') `
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProductPrice = styled('div') `
    font-family: 'Bebas Neue', sans-serif;
    font-size: 40px;
    color: ${(props) => props.theme.palette.system.primary};
`



export const DeleteBlock = styled('div') `
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


