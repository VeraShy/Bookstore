import styled from "styled-components";
import { builtinModules } from 'module';

export const ContentWrapper = styled('div') `
    max-width: 1150px;
    min-height: calc(100vh - 104px - 95px);
    height: 100%;
    margin: 104px auto 0 auto;
    padding: 0 15px;

    @media (max-width: 1150px) {
        width: 100%;
        padding: 0 40px;
    };

    @media (max-width: 580px) {
        width: 100%;
        padding: 0 24px;
    };
`

