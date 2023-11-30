import styled from "styled-components";
import { builtinModules } from 'module';

export const StyledFooter = styled('footer') `
    width: 100%;

    @media (max-width: 1150px) {
        width: 100%;
        padding: 0 40px;
    };

    @media (max-width: 580px) {
        padding: 0 24px;
    };
`

export const FooterWrapper = styled('div') `
    max-width: 1150px;
    height: 95px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.palette.background.gray};
    color: ${(props) => props.theme.palette.system.secondary};
    padding: 0 15px;

    @media (max-width: 580px) {
        padding: 0;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
    };
`