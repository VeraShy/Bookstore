import styled from "styled-components";
import { builtinModules } from 'module';

export const StyledTextMessage = styled('div') `
    color: ${(props) => props.theme.palette.system.primary};
    & h5 {
        font-size: 24px;
        font-weight: 400;
        padding: 0;
        margin: 0;  
    };

    & h6 {
        font-size: 16px;
        font-weight: 400;
        padding: 0;
        margin: 0;  
    };
    
    & p {
        font-size: 14px;
        font-weight: 400;
        padding: 0;
        margin: 0;
    };

    & h5 a {
        color: ${(props) => props.theme.palette.system.primary};
        font-size: 24px;
        font-weight: 600;
        padding: 0;
        margin: 0;    
        text-decoration: none; 
        &:hover {
            text-decoration: underline; 
        }
    };
    
    & h6 a {
        color: ${(props) => props.theme.palette.system.primary};
        font-size: 16px;
        font-weight: 600;
        padding: 0;
        margin: 0;    
        text-decoration: underline; 
    };

    & p a {
        color: ${(props) => props.theme.palette.system.primary};
        font-size: 14px;
        font-weight: 600;
        padding: 0;
        margin: 0;    
        text-decoration: none; 
        &:hover {
            text-decoration: underline; 
        }
    };


`


