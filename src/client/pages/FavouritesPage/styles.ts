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
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
    row-gap: 48px;
    flex-wrap: wrap;
`