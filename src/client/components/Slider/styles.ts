import styled from "styled-components";
import { builtinModules } from 'module';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SliderWrapper = styled('div') `
    width: 100%;
    padding: 72px 0 0 0;
`

export const SliderContent = styled(Slider) `
    padding-top: 50px;
    & .slick-list {
        width: 95%;
        margin: 0 auto;
    }

    & .slick-track {
        display: flex;
        gap: 30px;
    }

    & .slick-prev {  
        width: 30px;
        height: 30px;
        left: 0;
        &::before {
            color: ${(props) => props.theme.palette.system.primaryLight};
        }
    }

    & .slick-next {
        width: 50px;
        height: 30px;
        &::before {
            color: ${(props) => props.theme.palette.system.primaryLight};
        }
    }
`


