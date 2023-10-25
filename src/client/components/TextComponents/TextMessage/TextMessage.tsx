import React, {FC , PropsWithChildren} from 'react';
import { StyledTextMessage } from './styles';

interface ITextProps extends PropsWithChildren {
    variant: 'h5' | 'h6' | 'p'
};

const TextMessage: FC<ITextProps> = ({ children, variant: TagName = 'h6' }) => {
    return (
        <StyledTextMessage>
            <TagName>{children}</TagName>
        </StyledTextMessage>
    );
};

export default TextMessage;