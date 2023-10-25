import React, { FC, useEffect } from 'react';
import { IProduct } from '../../../../store/types';
import Title from '../../TextComponents/Title/Title';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import { CardWrapper , ImageBlock , ProductImage , InfoBlock , ProductTitle , ProductDescription , ProductPrice } from './styles';

const ProductCard: FC<{ productInfo: IProduct }> = ({ productInfo }) => {
    const fullPageURL = `/product/${productInfo.isbn13}`;
    
    return (
        <CardWrapper>
            <ImageBlock>
                <ProductImage src={productInfo.image} />
            </ImageBlock>
            
            <InfoBlock>               
                <ProductTitle>
                    <Title variant='p'> 
                        <Link to={fullPageURL}>{productInfo.title}</Link> 
                    </Title>
                </ProductTitle>               
                <ProductDescription> {productInfo.subtitle} </ProductDescription>
                <ProductPrice> {productInfo.price} </ProductPrice>
            </InfoBlock>  
        </CardWrapper>
    );
};

export default ProductCard;