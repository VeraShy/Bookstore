import styled from "styled-components";
import { builtinModules } from 'module';

export const Button = styled('button') `
    width: max-content;
    height: 56px;
    background-color: transparent;
    color: ${(props) => props.theme.palette.system.primary};
    border: none;
    cursor: pointer;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    /* border: 1px solid black;
    border-radius: 3px;
    padding: 0 20px; */
    &:hover {
        text-decoration: underline;
    };
`