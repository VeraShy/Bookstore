import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBookInfo } from '../../../../store/types';
import Title from '../../TextComponents/Title/Title';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { CardWrapper , ProductInfoBlock, ImageBlock , ProductImage , InfoBlock , ProductTitle , ProductDescription, PriceDeleteBlock, PriceBlock , 
    ProductPrice, ProductQuantity , MinusButton , PlusButton , Quantity , DeleteBlock } from './styles';
import { useActions } from '../../../../store/Hooks/useActions';

interface IInCartCardProps {
    book: IBookInfo,
};

const InCartCard: FC<IInCartCardProps> = ({ book }) => {
    const fullPageURL = `/product/${book.isbn13}`;
    const { removeFromCart , plusProduct , minusProduct } = useActions();
    const pricePerItem = +(book.price).replace('$', '');
    const bookTotalPrice = (pricePerItem * book.qty).toFixed(2);

    return (
        <CardWrapper>
            <ProductInfoBlock>
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
                        <MinusButton disabled={book.qty ===1} onClick={() => {minusProduct(book)}}> - </MinusButton>
                        <Quantity>{book.qty} </Quantity>
                        <PlusButton onClick={() => {plusProduct(book)}}> + </PlusButton>
                    </ProductQuantity>
                </InfoBlock>
            </ProductInfoBlock>

            <PriceDeleteBlock>
                <PriceBlock>
                    <ProductPrice> {'$' + bookTotalPrice} </ProductPrice>
                </PriceBlock>

                <DeleteBlock>
                    <IconButton onClick={() => {removeFromCart(book)}}>
                        <Close />
                    </IconButton>
                </DeleteBlock>
            </PriceDeleteBlock>
        </CardWrapper>
    );
};

export default InCartCard;