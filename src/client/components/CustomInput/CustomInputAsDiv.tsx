import React, {FC} from 'react';
import { TextInput , OutlinedInput , InputAsDiv} from './styles';

interface ICustomInputProps {
    type?: string,
    name?: string,
    placeholder?: string,
    value?: string | number,
    defaultValue?: string,
    isActive?: boolean,
    onInputChange?: (event: any) => void,
};

const CustomInputAsDiv: FC<ICustomInputProps> = ({
    type = '',
    name = '',
    placeholder = '',
    value = '',
    defaultValue = '',
    isActive = true,
    onInputChange,
}) => {   
    return (
        <InputAsDiv $active = {isActive} type={type} placeholder={placeholder} onChange={onInputChange}/>
    );
};

export default CustomInputAsDiv;