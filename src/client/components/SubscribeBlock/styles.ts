import styled from "styled-components";
import { builtinModules } from 'module';

export const SubscribeWrapper = styled('div') `
    width: 100%;
    height: max-content;
    padding: 56px 64px;
    background-color: ${(props) => props.theme.palette.additional.purple};

    @media (max-width: 830px) {
        padding: 40px;
    };

    @media (max-width: 680px) {
        padding: 24px;
    };
`

export const SubscribeText = styled('p') `
    font-size: 18px;
    color: ${(props) => props.theme.palette.system.secondary};
    padding: 10px 0 32px 0;

    @media (max-width: 680px) {
        font-size: 16px;
    };
`

export const SubscribeInputGroup = styled('div') `
    width: 100%;
    display: flex;

    @media (max-width: 580px) {
        flex-direction: column;
        gap: 24px;
    };
`

export const SubscribeInput = styled('div') `
    width: calc(100% - 170px);
    height: 100%;

    @media (max-width: 580px) {
        width: 100%
    };
`

export const SubscribeButton = styled('div') `
    width: 170px;
    height: 100%;

    @media (max-width: 580px) {
        width: 100%
    };
`