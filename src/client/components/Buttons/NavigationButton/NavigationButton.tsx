import React, {FC} from 'react';
import { Button } from './styles';

interface INavigationButtonProps {
    content?: string,
    isActive?: boolean,
    onBtnClick?: () => void,
};

const NavigationButton: FC<INavigationButtonProps> = ({
    content = '',
    isActive = true,
    onBtnClick,
}) => {
    return (
        <Button onClick={onBtnClick}>
           {content}
        </Button>
    );
};

export default NavigationButton;