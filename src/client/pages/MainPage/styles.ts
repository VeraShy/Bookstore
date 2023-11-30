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
    padding-bottom: 20px;
    text-align: center;

    @media (max-width: 580px) {
        padding-bottom: 28px;
    };
`

export const PageNavigation = styled('div') `
    display: flex;
    justify-content: center;
    gap: 30px;
    padding-bottom: 28px;

    @media (max-width: 580px) {
        width: 100%;
        flex-direction: column;
        gap: 0;
        align-items: center;
    };
`

export const PageContent = styled('div') `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 48px;
    margin-bottom: 72px;

    @media (max-width: 830px) {
        grid-template-columns: 1fr 1fr;
    };

    @media (max-width: 580px) {
        grid-template-columns: 1fr;
    };
`

export const EmptyCard = styled('div') `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 120px;
    & a {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 24px;
        color: ${(props) => props.theme.palette.system.primary};
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    };

    @media (max-width: 830px) {
        display: none;
    };
`