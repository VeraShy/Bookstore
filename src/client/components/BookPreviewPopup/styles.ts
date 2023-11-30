import styled from "styled-components";
import { builtinModules } from 'module';

export const PopupBackground = styled('div') `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
`

export const PopupWrapper = styled('div') `
    max-width: 700px;
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.palette.background.main};
    position: absolute;
    padding: 25px 40px 40px 40px;
`

export const CloseButtonWrapper = styled('div') `
    width: 100%;
    text-align: end;
    padding-bottom: 30px;
`

export const CloseButton = styled('button') `
    border: none;
    background-color: transparent;
`

export const BookPreviewContent = styled('div') `
    width: 100%;
    height: auto;
`