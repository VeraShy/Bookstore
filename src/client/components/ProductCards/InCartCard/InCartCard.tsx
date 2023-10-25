import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBookInfo } from '../../../../store/types';
import Title from '../../TextComponents/Title/Title';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { CardWrapper , ImageBlock , ProductImage , InfoBlock , ProductTitle , ProductDescription, PriceBlock , 
    ProductPrice, ProductQuantity , MinusButton , PlusButton , Quantity , DeleteBlock } from './styles';
import { useActions } from '../../../../store/Hooks/useActions';

interface IInCartCardProps {
    book: IBookInfo,
};

const InCartCard: FC<IInCartCardProps> = ({ book }) => {
    const fullPageURL = `/product/${book.isbn13}`;
    const { removeFromCart , plusProduct , minusProduct } = useActions();

    return (
        <CardWrapper>
            <ImageBlock>
                <ProductImage src={book.image}/>
            </ImageBlock>

            <InfoBlock>
                <ProductTitle>
                    <Title variant='p'>
                        <Link to={fullPageURL}>{book.title}</Link> 
                    </Title>
                </ProductTitle>
                <ProductDescription> {book.subtitle} </ProductDescription>
                <ProductQuantity>
                    <MinusButton onClick={() => {minusProduct(book)}}> - </MinusButton>
                    <Quantity>{book.qty} </Quantity>
                    <PlusButton onClick={() => {plusProduct(book)}}> + </PlusButton>
                </ProductQuantity>
            </InfoBlock>

            <PriceBlock>
                <ProductPrice> {book.price} </ProductPrice>
            </PriceBlock>

            <DeleteBlock>
                <IconButton onClick={() => {removeFromCart(book)}}>
                    <Close />
                </IconButton>
            </DeleteBlock>
            
        </CardWrapper>
    );
};

export default InCartCard;