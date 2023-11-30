import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../TextComponents/Title/Title';
import { IconButton , Rating } from '@mui/material';
import { IBookInfo , IProduct } from '../../../../store/types';
import TabBar from './TabBar/TabBar';
import CustomButton from '../../Buttons/CustomButton/CustomButton';
import { useActions } from '../../../../store/Hooks/useActions';
import { useTypedSelector } from '../../../../store/Hooks/useTypedSelector';
import { useMediaQueries } from '../../../hooks/useMediaQuery';
import { CardWrapper , ImageBlock , ProductImage , ProductTitle , FavsButton , CardContent , InfoBlock , 
    PriceRatingInfo , ProductPrice , ProductRating , ProductInfo , ProductInfoCategory , 
    CategoryName , CategoryValue , MoreButton , ProductButtons, PreviewBookButton , HeartOutlined , HeartFilled } from './styles';

interface IFullBookCardProps {
    book: IBookInfo,
};

const FullBookCard: FC<IFullBookCardProps> = ({ book }) => {
    const favouriteBooks = useTypedSelector(state => state.products.favouriteProducts);
    const isFavourite = !!favouriteBooks.find((item) => item.isbn13 === book.isbn13);
    const inCartProducts = useTypedSelector(state => state.cart.inCartProducts);
    const isInCart = !!inCartProducts.find((item) => item.isbn13 === book.isbn13);
    const { mobile , tablet , laptop } = useMediaQueries();
    
    const { addToFavs , removeFromFavs , openPopup , getPopupInfo , addToViewed , addToCart } = useActions();

    const handleAddToFavs = () => {
        isFavourite ? removeFromFavs(book) : addToFavs(book);
    };

    const handleAddToCart = () => {
        addToCart(book);
    };

    const handlePreview = () => {
        getPopupInfo(book);
        openPopup();
    };    

    useEffect(() => {
        addToViewed(book!)
    }, [book]);

    return (
        <CardWrapper>
            <ProductTitle>
                { mobile ? <Title variant='h1'>{book.title}</Title> : <Title variant='h2'>{book.title}</Title> }
            </ProductTitle>
            <CardContent>
                <ImageBlock>
                    <ProductImage src={book.image}/>                   
                    <FavsButton><IconButton onClick={handleAddToFavs}>
                        {isFavourite ? <HeartFilled />: <HeartOutlined />}
                    </IconButton></FavsButton> 
                </ImageBlock> 

                <InfoBlock >
                    <PriceRatingInfo>
                        <ProductPrice> {book.price} </ProductPrice>
                        <ProductRating><Rating name="read-only" value={+book.rating} readOnly /></ProductRating>
                    </PriceRatingInfo>

                    <ProductInfo>
                        <ProductInfoCategory>
                            <CategoryName>Authors</CategoryName>
                            <CategoryValue> {book.authors} </CategoryValue>
                        </ProductInfoCategory>

                        <ProductInfoCategory>
                            <CategoryName>Publisher</CategoryName>
                            <CategoryValue> {book.publisher} </CategoryValue>
                        </ProductInfoCategory>
                       
                        <ProductInfoCategory>
                            <CategoryName>Year</CategoryName>
                            <CategoryValue> {book.year} </CategoryValue>
                        </ProductInfoCategory>

                        <ProductInfoCategory>
                            <CategoryName>Pages</CategoryName>
                            <CategoryValue> {book.pages} </CategoryValue>
                        </ProductInfoCategory>
                    </ProductInfo>
                    
                    <ProductButtons>
                        <CustomButton 
                            onBtnClick = {handleAddToCart} 
                            content = {isInCart ? 'In cart' : 'Add to cart'} 
                            variant = 'filled'
                            isActive = {isInCart ? false : true}/>
                        <PreviewBookButton onClick={handlePreview}>Preview Book</PreviewBookButton>
                    </ProductButtons>
                </InfoBlock>
            </CardContent>
            <TabBar book={book}/>
        </CardWrapper>
    );
};

export default FullBookCard;