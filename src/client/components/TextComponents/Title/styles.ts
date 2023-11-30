import styled from "styled-components";
import { builtinModules } from 'module';

export const StyledTitle = styled('div') `
    color: ${(props) => props.theme.palette.system.primary};
    & h1 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 56px;
        padding: 0;
        margin: 0;  
        text-transform: uppercase;   
    };
    
    & h2 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 40px;
        padding: 0;
        margin: 0;
        text-transform: uppercase; 
    };

    & p {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 24px;
        padding: 0;
        margin: 0;
    };

    & h1 a {
        color: ${(props) => props.theme.palette.system.primary};
        font-family: 'Bebas Neue', sans-serif;
        font-size: 56px;
        padding: 0;
        margin: 0;    
        text-decoration: none; 
        &:hover {
            text-decoration: underline; 
        }
    };
    
    & h2 a {
        color: ${(props) => props.theme.palette.system.primary};
        font-family: 'Bebas Neue', sans-serif;
        font-size: 40px;
        padding: 0;
        margin: 0;
        text-decoration: none; 
        &:hover {
            text-decoration: underline; 
        }
    };

    & p a {
        color: ${(props) => props.theme.palette.system.primary};
        font-family: 'Bebas Neue', sans-serif;
        font-size: 24px;
        padding: 0;
        margin: 0;
        text-decoration: none;
        &:hover {
            text-decoration: underline; 
        }
    };
`
