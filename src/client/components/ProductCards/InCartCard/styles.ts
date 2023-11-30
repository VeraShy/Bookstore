import styled from "styled-components";
import { builtinModules } from 'module';
import { FavoriteBorder , Favorite } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export const CardWrapper = styled('div') `
    width: 100%;
    display: flex;
    border-bottom: 1px solid  ${(props) => props.theme.palette.background.gray};
    padding-bottom: 48px;

    @media (max-width: 580px) {
        flex-direction: column;
    };
`

export const ProductInfoBlock = styled('div') `
    width: 70%;
    display: flex;
    padding-right: 20px;

    @media (max-width: 580px) {
        width: 100%;
        padding: 0;
    };
`

export const ImageBlock = styled('div') `
    width: 40%;
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
    width: 60%;
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

export const PriceDeleteBlock = styled('div') `
    width: 30%;
    display: flex;

    @media (max-width: 580px) {
        width: 100%;
        padding-top: 30px;
        justify-content: space-between;
    };
`

export const PriceBlock = styled('div') `
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const ProductPrice = styled('div') `
    font-family: 'Bebas Neue', sans-serif;
    font-size: 40px;
    color: ${(props) => props.theme.palette.system.primary};
`

export const DeleteBlock = styled('div') `
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 580px) {
        width: auto;
    };
`


