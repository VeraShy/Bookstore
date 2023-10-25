import styled from "styled-components";
import { builtinModules } from 'module';

export const PageWrapper = styled('div') `
    width: 100%;
    padding: 108px 0 100px 0;
`

export const FormWrapper = styled('div') `
    width: 550px;
    height: max-content;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.palette.background.gray};
`

export const FormTitle = styled('div') `
    width: 100%;
    padding-bottom: 26px;
`

export const FormContent = styled('form') `
    padding: 32px 32px 40px 32px;
`

export const InformationField = styled('div') `
    width: 100%;
    height: max-content;
    background-color: ${(props) => props.theme.palette.additional.purple};
    padding: 20px;
    margin-bottom: 32px;
    
    & span {
        font-weight: 700;
    }
`

export const InputGroup = styled('div') `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 20px;
    & label {
        font-size: 16px;
        font-weight: 600;
    }
`

export const InputSubmitButton = styled('div') `
    padding-top: 20px;
`