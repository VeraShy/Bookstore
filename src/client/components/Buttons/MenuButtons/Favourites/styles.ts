import styled from "styled-components";
import { builtinModules } from 'module';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const StyledIcon = styled(FavoriteBorderIcon) `
    position: relative;
`

export const Indicator = styled('div') `
    width: 12px;
    height: 12px;
    position: absolute;
    right: 5px;
    top: 7px;
    background-color: ${props => props.theme.palette.additional.red};
    border: 2px solid ${props => props.theme.palette.background.main};
    border-radius: 50%;
`
