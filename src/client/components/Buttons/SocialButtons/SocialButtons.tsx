import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Instagram , Facebook , Twitter , MoreHoriz , YouTube ,  ChevronLeft } from '@mui/icons-material';
import { SocialButtonsWrapper } from './styles';

const socialIcons = [
    <IconButton> <Facebook /> </IconButton>,
    <IconButton> <Twitter /> </IconButton>,
    <IconButton> <Instagram /> </IconButton>,
    <IconButton> <YouTube /> </IconButton>  
];

const SocialButtons = () => {
    const [openMore, setOpenMore] = useState(false);

    return (
        <SocialButtonsWrapper>
            {openMore ? socialIcons : socialIcons.slice(0, 2)}
            <IconButton onClick={() => setOpenMore(!openMore)}> 
                {openMore ? <ChevronLeft /> : <MoreHoriz />}
            </IconButton>         
        </SocialButtonsWrapper>
    );
};

export default SocialButtons;