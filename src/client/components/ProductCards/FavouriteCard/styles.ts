import styled from "styled-components";
import { builtinModules } from 'module';
import { FavoriteBorder , Favorite } from '@mui/icons-material';

export const CardWrapper = styled('div') `
    width: 100%;
    display: flex;
    border-bottom: 1px solid  ${(props) => props.theme.palette.background.gray};
    padding-bottom: 48px;

    @media (max-width: 580px) {
        flex-direction: column;
    };
`

export const ImageBlock = styled('div') `
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.palette.additional.blue};
    position: relative;

    @media (max-width: 580px) {
        width: 100%;
        margin-bottom: 20px;
    };
`

export const ProductImage = styled('img') `
    width: 165px;
    height: 190px;
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
    width: 65%;
    height: 100%;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 580px) {
        width: 100%;
        padding: 0;
    };
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

    @media (max-width: 830px) {
        padding-right: 70px;
    };

    @media (max-width: 580px) {
        padding-right: 0;
    };
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
