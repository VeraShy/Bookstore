import React, { FC } from 'react';
import { IBookInfo } from '../../../../store/types';
import Title from '../../TextComponents/Title/Title';
import { CardWrapper , ImageBlock , ProductImage , InfoBlock , ProductTitle , ProductDescription , ProductPrice } from './styles';

const PreviewCard: FC<{ book: IBookInfo }> = ({ book }) => { 
    return (
        <CardWrapper>
            <ImageBlock>
                <ProductImage src={book.image} />
            </ImageBlock>
            
            <InfoBlock>               
                <ProductTitle>
                    <Title variant='p'> {book.title} </Title>
                </ProductTitle>               
                <ProductDescription> {book.desc} </ProductDescription>
            </InfoBlock>  
        </CardWrapper>
    );
};

export default PreviewCard;