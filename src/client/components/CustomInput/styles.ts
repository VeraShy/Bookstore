import styled from "styled-components";
import { builtinModules } from 'module';

type InputProps = {
    $active: boolean;
}

const Input = styled('input') `
    width: 100%;
    height: 56px;
    font-size: 16px;
    padding-left: 26px;
    &::placeholder {
        font-size: 16px;
        color: ${(props) => props.theme.palette.system.secondary};
    }
`

export const TextInput = styled(Input) `
    border: none;
    outline: none;
`

export const OutlinedInput = styled(Input) `
    border: 1px solid ${(props) => props.theme.palette.background.gray};
    outline: none;
`

export const InputAsDiv = styled('input')<InputProps> `
    width: 100%;
    height: 56px;
    font-size: 16px;
    padding-left: 26px;
    border: 1px solid ${(props) => props.theme.palette.background.gray};
    outline: none;
    &::placeholder {
        font-size: 16px;
        color: ${(props) => props.theme.palette.system.primary};
    }

    ${(props) => {
        return props.$active ? ' ' : 'pointer-events: none'
    }}
`