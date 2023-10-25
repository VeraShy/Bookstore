import React from 'react';
import Title from '../TextComponents/Title/Title';

const ErrorMessage = () => {
    return (
        <div>
            <Title variant='h2'>
                Oooops! 
            </Title>
            <Title variant='p'>
                No book found!
            </Title>
        </div>
    );
};

export default ErrorMessage;