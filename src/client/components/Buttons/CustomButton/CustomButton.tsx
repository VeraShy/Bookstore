import React, {FC} from 'react';
import { FilledButton , OutlinedButton } from './styles';

interface ICustomButtonProps {
    content?: string,
    isActive?: boolean,
    variant: 'filled' | 'outlined',
    onBtnClick?: (event: any) => void,
};

const buttonVariants: Record<'filled' | 'outlined', typeof FilledButton> = {
    filled: FilledButton,
    outlined: OutlinedButton,
};

const CustomButton: FC<ICustomButtonProps> = ({
    content = '',
    isActive = true,
    variant,
    onBtnClick,
}) => {
    const Button = buttonVariants[variant];

    return (
        <Button $active = {isActive} onClick={onBtnClick}>
            {content}
        </Button>
    );
};

export default CustomButton;