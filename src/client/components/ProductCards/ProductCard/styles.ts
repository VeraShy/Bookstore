import styled from "styled-components";
import { builtinModules } from 'module';

export const CardWrapper = styled('div') `
    width: 100%;
    height: max-content;
`

export const ImageBlock = styled('div') `
    width: 100%;
    height: 265px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.palette.additional.blue};
`

export const ProductImage = styled('img') `
    width: 226px;
    height: 265px;
    display: block;
`

export const InfoBlock = styled('div') `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 20px;
`

export const ProductTitle = styled('div') `
    height: 65px;
    overflow: hidden;
`

export const ProductDescription = styled('div') `
    width: 100%;
    height: 60px;
    overflow: hidden;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: ${(props) => props.theme.palette.system.secondary};
`

export const ProductPrice = styled('div') `
    min-height: 32px;
    height: max-content;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    color: ${(props) => props.theme.palette.system.primary};
`