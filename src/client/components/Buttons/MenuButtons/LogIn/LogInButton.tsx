import React, {FC} from 'react';
import { IconButton } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

interface IButtonProps {
    onBtnClick?: () => void,
};

const LogInButton: FC<IButtonProps> = ({
    onBtnClick
}) => {
    return (
        <IconButton onClick={onBtnClick}>
            <PersonOutlineIcon />
        </IconButton>
    );
};

export default LogInButton;