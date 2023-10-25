import styled from "styled-components";
import { builtinModules } from 'module';

export const SearchBarWrapper = styled('div') `
    max-width: 540px;
    width: 100%;
    height: 56px;
    display: flex;
    border: 1px solid ${(props) => props.theme.palette.background.gray};
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
        background-color: ${(props) => props.theme.palette.background.light}
    };
`

export const SearchButton = styled('div') `
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`