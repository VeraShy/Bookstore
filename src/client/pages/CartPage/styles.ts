import styled from "styled-components";
import { builtinModules } from 'module';

export const PageWrapper = styled('div') `
    width: 100%;
    padding: 72px 0;

    @media (max-width: 580px) {
        padding: 56px 0;
    };
`

export const PageTitle = styled('div') `
    padding: 20px 0 48px 0;

    @media (max-width: 580px) {
        padding-bottom: 28px;
    };
`

export const PageContent = styled('div') `
    width: 100%;
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
    row-gap: 48px;
    flex-wrap: wrap;
`

export const CartTotal = styled('div') `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const TotalLine = styled('div') `
    width: 30%;
    display: flex;
    padding-bottom: 18px;

    @media (max-width: 830px) {
        width: 50%;
    };

    @media (max-width: 580px) {
        width: 100%;
    };
`

export const TotalLineResult = styled('div') `
    width: 30%;
    display: flex;
    padding: 4px 0 24px 0;
    & p {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 40px;
        color: ${(props) => props.theme.palette.system.primary};
    };

    @media (max-width: 580px) {
        width: 100%;
    };
`

export const TotalLineText = styled('p') `
    width: 50%;
    font-size: 16px;
    color: ${(props) => props.theme.palette.system.secondary};
`

export const TotalLineNum = styled('p') `
    width: 50%;
    text-align: end;
    font-size: 16px;
    color: ${(props) => props.theme.palette.system.primary};
`

export const ButtonWrapper = styled('div') `
    width: 30%;
    padding-top: 10px;

    @media (max-width: 830px) {
        width: 50%;
    };

    @media (max-width: 580px) {
        width: 100%;
    };
`
