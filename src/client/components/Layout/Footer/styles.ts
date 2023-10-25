import styled from "styled-components";
import { builtinModules } from 'module';

export const FooterWrapper = styled('footer') `
    max-width: 1150px;
    height: 95px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.palette.background.gray};
    color: ${(props) => props.theme.palette.system.secondary};
    padding: 0 15px;
`