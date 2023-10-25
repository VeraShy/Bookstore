import React, { FC, useEffect } from 'react';
import { IBookInfo } from '../../../../store/types';
import Title from '../../TextComponents/Title/Title';
import { Link } from 'react-router-dom';
import { Rating } from '@mui/material';
import { CardWrapper , ImageBlock , ProductImage , InfoBlock , ProductTitle ,ProductDescription , PriceRatingInfo , ProductPrice , ProductRating } from './styles';

const RecentlyViewedCard: FC<{ book: IBookInfo }> = ({ book }) => {
    const fullPageURL = `/product/${book.isbn13}`;
    
    return (
        <CardWrapper>
            <ImageBlock>
                <ProductImage src={book.image} />
            </ImageBlock>
            
            <InfoBlock>               
                <ProductTitle>
                    <Title variant='p'> 
                        <Link to={fullPageURL}>{book.title}</Link> 
                    </Title>
                </ProductTitle>               
                <ProductDescription> {book.subtitle} </ProductDescription>
                <PriceRatingInfo>
                    <ProductPrice> {book.price} </ProductPrice>
                    <ProductRating><Rating name="read-only" value={+book.rating} readOnly /></ProductRating>
                </PriceRatingInfo>
            </InfoBlock>  
        </CardWrapper>
    );
};

export default RecentlyViewedCard;