import styled from "styled-components";
import { builtinModules } from 'module';

export const MenuDropdownWrapper = styled('div') `
    width: max-content;
`

export const MenuButton = styled('button') `
    width: 56px;
    height: 56px;
    transition: 0.3s;
    cursor: pointer;
    border: none;
    background-color: transparent;
`

export const MenuDropdownBackground = styled('div') `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
`

export const DropdownWrapper = styled('div') `
    width: 370px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: calc(100% - 370px);
    background-color: ${(props) => props.theme.palette.background.main};
    border: 1px solid ${(props) => props.theme.palette.background.gray};
    padding: 0 40px;

    @media (max-width: 580px) {
        width: 100%;
        left: 0;
        padding: 0 24px;
    };
`

export const CloseButtonWrapper = styled('div') `
    height: 104px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.palette.background.gray};
`

export const CloseButton = styled('button') `
    width: 56px;
    height: 56px;
    transition: 0.3s;
    cursor: pointer;
    border: none;
    background-color: transparent;
`

export const DropdownContent = styled('div') `
    height: calc(100% - 106px);
    display: flex;
    flex-direction: column;
    padding: 56px 0;
` 

export const SearchWrapper = styled('div') `
    width: 100%;
    display: flex;
`

export const SearchButton = styled('div') `
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    outline: none;
    border: none;
`

export const LinksWrapper = styled('ul') `
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const StyledLink = styled('li') `
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;    
    font-weight: 500;
    text-decoration: none;
    padding-top: 10px;
    & a {
        width: 100%;
        text-align: center;
        text-decoration: none;
    };
        
    &:hover {
        text-decoration: underline;
    };
`

export const SignInButton = styled('div') `
    width: 100%;
    height: max-content;
    display: flex;
    justify-self: flex-end;
`
 

