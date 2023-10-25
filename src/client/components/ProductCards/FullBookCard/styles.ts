import styled from "styled-components";
import { builtinModules } from 'module';
import { FavoriteBorder , Favorite } from '@mui/icons-material';

export const CardWrapper = styled('div') `
    width: 100%;
    height: max-content;
`

export const ProductTitle = styled('div') `
    padding: 20px 0 48px 0;
`

export const CardContent = styled('div') `
    width: 100%;
    height: 100%;
    display: flex;
    column-gap: 128px;
    margin-bottom: 70px;
`

export const ImageBlock = styled('div') `
    width: 49%;
    height: 472px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.palette.additional.orange};
    position: relative;
`

export const ProductImage = styled('img') `
    width: 300px;
    height: 350px;
    display: block;
`

export const FavsButton = styled('div') `
    width: 56px;
    height: 56px;
    position: absolute;
    top: 0;
    left: calc(100% - 56px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.palette.system.primary};  
`

export const InfoBlock = styled('div') `
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid ${(props) => props.theme.palette.background.gray};
`

export const PriceRatingInfo = styled('div') `
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40px 0 24px 0;
`

export const ProductPrice = styled('div') `
    width: 50%;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 48px;
    color: ${(props) => props.theme.palette.system.primary};
`

export const ProductRating = styled('div') `
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const ProductInfo = styled('ul') `

`

export const ProductInfoCategory = styled('li') `
    display: flex;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 32px;
`

export const CategoryName = styled('div') `
    width: 40%; 
    color: ${(props) => props.theme.palette.system.secondary};
`

export const CategoryValue = styled('div') `
    width: 60%;
    text-align: end;
    color: ${(props) => props.theme.palette.system.primary};
`

export const MoreButton = styled('div') `
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 32px;
    color: ${(props) => props.theme.palette.system.primary};
    padding-top: 10px;
`

export const ProductButtons = styled('div') `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
`

export const PreviewBookButton = styled('button') `
    background-color: transparent;
    color: ${(props) => props.theme.palette.system.primary};
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`

export const HeartOutlined = styled(FavoriteBorder) `
    color: ${(props) => props.theme.palette.background.main};
`

export const HeartFilled = styled(Favorite) `
    color: ${(props) => props.theme.palette.additional.red};
`
