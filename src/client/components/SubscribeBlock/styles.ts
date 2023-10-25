import styled from "styled-components";
import { builtinModules } from 'module';

export const SubscribeWrapper = styled('div') `
    width: 100%;
    height: max-content;
    padding: 56px 64px;
    background-color: ${(props) => props.theme.palette.additional.purple};
`

export const SubscribeText = styled('p') `
    font-size: 18px;
    color: ${(props) => props.theme.palette.system.primary};
    padding: 10px 0 32px 0;
`

export const SubscribeInputGroup = styled('div') `
    width: 100%;
    height: 56px;
    display: flex;
`

export const SubscribeInput = styled('div') `
    width: calc(100% - 170px);
    height: 100%;
`

export const SubscribeButton = styled('div') `
    width: 170px;
    height: 100%;
`