import React, {FC} from 'react';
import { TextInput , OutlinedInput} from './styles';

interface ICustomInputProps {
    type?: string,
    name?: string,
    placeholder?: string,
    value?: string | number,
    defaultValue?: string,
    isActive?: boolean,
    variant: 'text' | 'outlined',
    onInputChange?: (event:any) => void,
};

const inputVariants: Record<'text' | 'outlined', typeof TextInput> = {
    text: TextInput,
    outlined: OutlinedInput,
};

const CustomInput: FC<ICustomInputProps> = ({
    type = '',
    name = '',
    placeholder = '',
    value = '',
    defaultValue = '',
    variant,
    isActive = true,
    onInputChange,
}) => {
    const Input = inputVariants[variant];
    
    return (
        <Input type={type} placeholder={placeholder} onChange={onInputChange}/>
    );
};

export default CustomInput;