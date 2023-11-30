import styled from "styled-components";
import { builtinModules } from 'module';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link) `
    text-decoration: none;
`

export const CardWrapper = styled('div') `
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.palette.background.gray};
    padding: 20px;

    &:hover {
        transition: 0.3s;
        background-color: ${(props) => props.theme.palette.background.gray};
    };
`

export const ImageBlock = styled('div') `
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageBackground = styled('div') `
    width: 80px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.palette.additional.blue};
`

export const ProductImage = styled('img') `
    width: 51px;
    height: 60px;
    display: block;
`

export const InfoBlock = styled('div') `
    width: calc(100% - 80px);
    padding-left: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & a {
        text-decoration: none;
    }
`


