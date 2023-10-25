import React from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { BackLinkButton } from './styles';

const BackLink = () => {
    const navigate = useNavigate();

    return (
        <BackLinkButton onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon fontSize='large'/>
        </BackLinkButton>
    );
};

export default BackLink;