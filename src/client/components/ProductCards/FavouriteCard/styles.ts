import styled from "styled-components";
import { builtinModules } from 'module';
import { FavoriteBorder , Favorite } from '@mui/icons-material';

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
    width: 65%;
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

export const PriceRatingInfo = styled('div') `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 200px;
`

export const ProductPrice = styled('div') `
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    color: ${(props) => props.theme.palette.system.primary};
`

export const ProductRating = styled('div') `

`

export const LikeBlock = styled('div') `
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeartOutlined = styled(FavoriteBorder) `
    color: ${(props) => props.theme.palette.system.secondary};
`

export const HeartFilled = styled(Favorite) `
    color: ${(props) => props.theme.palette.additional.red};
`
