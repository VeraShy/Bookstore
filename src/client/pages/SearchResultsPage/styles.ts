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
    padding-bottom: 48px;

    @media (max-width: 580px) {
        padding-bottom: 28px;
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