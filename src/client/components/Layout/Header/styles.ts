import styled from "styled-components";
import { builtinModules } from 'module';

export const StyledHeader = styled('header') `
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 5;
    background-color: ${(props) => props.theme.palette.background.main};

    @media (max-width: 1150px) {
        width: 100%;
        padding: 0 40px;
    };

    @media (max-width: 580px) {
        padding: 0 24px;
    };
`

export const HeaderWrapper = styled('div') `
    max-width: 1150px;
    height: 104px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.palette.background.gray};
    padding: 0 15px;

    @media (max-width: 1150px) {
        padding: 0;
    };
`

export const HeaderLogo = styled('div') `
    width: 25%;
    height: max-content;
    a {    
        font-family: 'Bebas Neue', sans-serif;
        font-size: 40px;
        font-weight: 700;
        color: ${(props) => props.theme.palette.system.primary};
        text-decoration: none;
    }
`

export const HeaderSearchBar = styled('div') `
    width: 50%;
    height: max-content;
    
    @media (max-width: 820px) {
        display: none;
    };
`

export const HeaderActionButtons = styled('div') `
    width: 25%;
    height: max-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

    @media (max-width: 820px) {
        display: none;
    };
`

export const HeaderTabletPanel = styled('div') `
    display: none;

    @media (max-width: 820px) {
        width: 70%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    };
`
