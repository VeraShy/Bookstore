import styled from "styled-components";
import { builtinModules } from 'module';

export const SearchBarWrapper = styled('div') `
    max-width: 540px;
    width: 100%;
    position: relative;
`

export const SearchInputWrapper = styled('div') `
    width: 100%;
    height: 56px;
    display: flex;
    border: 1px solid ${(props) => props.theme.palette.background.gray};

    &:focus .SearchButton {
        background-color: ${(props) => props.theme.palette.background.light};
    };
`

export const SearchInput = styled('input') `
    width: calc(100% - 56px);
    border: none;
    padding-left: 20px;
    font-size: 16px;
    &::placeholder {
        color: ${(props) => props.theme.palette.system.secondary};
    };
    &:focus {
        outline: none;
        border: none;
        background-color: ${(props) => props.theme.palette.background.light};
    };
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

export const SearchResultsWrapper = styled('div') `
    max-width: 540px;
    width: 100%;
    height: fit-content;
    max-height: 560px;
    position: absolute;
    margin-top: 5px;
    background-color: ${(props) => props.theme.palette.background.main};
    border: 1px solid ${(props) => props.theme.palette.background.gray};

    @media (max-width: 820px) {
        width: 50%;
    };
`

export const ViewAllButton = styled('div') `
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: ${(props) => props.theme.palette.system.secondary};
    cursor: pointer;

    &:hover {
        transition: 0.3s;
        color: ${(props) => props.theme.palette.system.primary}; 
        background-color: ${(props) => props.theme.palette.background.gray};
    };
`
