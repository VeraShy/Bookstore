import styled from "styled-components";
import { builtinModules } from 'module';

export const PageWrapper = styled('div') `
    width: 100%;
    height: 100%;
    padding: 72px 0;
`

export const PageTitle = styled('div') `
    padding: 20px 0 48px 0;
`

export const PageContent = styled('div') `
    width: 100%;
`

export const FormContent = styled('form') `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;
`

export const FormSection = styled('div') `
    width: 100%;
`

export const InputBlock = styled('div') `
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 30px 0 0 0;
    column-gap: 32px;
`

export const InputGroup = styled('div') `
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    & label {
        font-size: 16px;
        font-weight: 600;
    }
`

export const LabelWithButton = styled('div') `
    display: flex;
    justify-content: space-between;
    align-items: center;
` 

export const EditButton = styled('button') `
    background-color: transparent;
    border: 1px solid transparent;
` 

export const TextField = styled('div') `
    height: 56px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${(props) => props.theme.palette.system.primary};
    padding-left: 26px;
    border: 1px solid ${(props) => props.theme.palette.background.gray};
    outline: none;
`

export const InputField = styled('input') `
    width: 100%;
    height: 56px;
    font-size: 16px;
    padding-left: 26px;
    border: 1px solid ${(props) => props.theme.palette.background.gray};
    outline: none;
    &::placeholder {
        font-size: 16px;
        color: ${(props) => props.theme.palette.system.secondary};
    }
`

export const ButtonsSection = styled('div') `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const ButtonsBlock = styled('div') `
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 32px;
`

export const ButtonWrapper = styled('div') `
    width: 257px;
`
export const ErrorMessage = styled('div') `
    color: red;
    font-size: 14px;
    margin-top: -10px;
    padding-bottom: 10px;
`