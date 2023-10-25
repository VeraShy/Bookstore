import React from 'react';
import Title from '../TextComponents/Title/Title';
import CustomButton from '../Buttons/CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import { SubscribeWrapper , SubscribeText , SubscribeInputGroup , SubscribeInput , SubscribeButton} from './styles';

const SubscribeBlock = () => {
    return (
        <SubscribeWrapper>
            <Title variant='h2'>Subscribe to newsletter</Title>
            <SubscribeText>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</SubscribeText>
            <SubscribeInputGroup>
                <SubscribeInput>
                    <CustomInput 
                        variant = 'text' 
                        type = 'email' 
                        placeholder = 'Your email'/>
                </SubscribeInput>
                <SubscribeButton>
                    <CustomButton 
                        content = {'Subscribe'} 
                        isActive = {true}
                        variant = 'filled' />
                </SubscribeButton>     
            </SubscribeInputGroup>
        </SubscribeWrapper>
    );
};

export default SubscribeBlock;