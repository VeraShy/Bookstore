import styled from "styled-components";
import { builtinModules } from 'module';

export const colorPalette = {
    system: {
        primary: '#313037',
        primaryLight: '#5B5A62',
        secondary: '#A8A8A8',
    },
    background: {
        main: '#FFFFFF',
        gray: '#E7E7E7',
        light: '#F7F7F7',
    },
    additional: {
        red: '#FC857F',
        orange: '#FEE9E2',
        purple: '#F4EEFD',
        blue: '#D7E4FD',
        green: '#CAEFF0',
    },
};

export const createColorTheme = () => {
    return {
        palette: colorPalette,
    }
}