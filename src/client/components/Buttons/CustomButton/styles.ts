import styled from "styled-components";
import { builtinModules } from 'module';

type BtnProps = {
    $active: boolean,
};

const Button = styled('button')<BtnProps>`
    width: 100%;
    height: 56px;
    
    border: none;
    cursor: pointer;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    ${(props) => {
        return props.$active ? '' : 'pointer-events: none; background-color: #A8A8A8'
    }}
`

export const FilledButton = styled(Button) `
    background-color: ${(props) => props.theme.palette.system.primary};
    color: ${(props) => props.theme.palette.background.main};
    &:hover {
        background-color: ${(props) => props.theme.palette.system.primaryLight};
    };
`

export const OutlinedButton = styled(Button) `
    border: 1px solid ${(props) => props.theme.palette.system.primary};
    background-color: ${(props) => props.theme.palette.background.main};
    color: ${(props) => props.theme.palette.system.primary};
    &:hover {
        background-color: ${(props) => props.theme.palette.background.light};
    };
`