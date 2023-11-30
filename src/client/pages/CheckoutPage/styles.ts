import styled from "styled-components";
import { builtinModules } from 'module';

export const PageWrapper = styled('div') `
    width: 100%;
    padding: 78px 0 72px 0;
`

export const PageTitle = styled('div') `
    padding-bottom: 48px;
`

export const PageContent = styled('div') `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 48px;
    margin-bottom: 72px;
`