import React, { FC } from 'react';
import { IBookInfo, IProduct } from '../../../../store/types';
import Title from '../../TextComponents/Title/Title';
import { Link } from 'react-router-dom';
import { Rating , IconButton } from '@mui/material';
import { useTypedSelector } from '../../../../store/Hooks/useTypedSelector';
import { useActions } from '../../../../store/Hooks/useActions';
import { useMediaQueries } from '../../../hooks/useMediaQuery';
import { CardWrapper , ImageBlock , ProductImage , FavsButton, InfoBlock , ProductTitle , ProductDescription , 
    PriceRatingInfo , ProductPrice , ProductRating , LikeBlock , HeartFilled , HeartOutlined} from './styles';

const FavouriteCard: FC<{ product: IProduct }> = ({ product }) => {
    const fullPageURL = `/product/${product.isbn13}`;
    const bookRating = useTypedSelector(state => state.productDetails.bookRating);
    const favouriteBooks = useTypedSelector(state => state.products.favouriteProducts);
    const isFavourite = !!favouriteBooks.find((book) => book.isbn13 === product.isbn13);
    const book = favouriteBooks.find((book) => book.isbn13 === product.isbn13);
    const { addToFavs , removeFromFavs } = useActions();
    const { mobile , tablet , laptop } = useMediaQueries();

    const handleAddToFavs = () => {
        isFavourite ? removeFromFavs(book!) : addToFavs(book!);
    };

    return (
        <CardWrapper>
            <ImageBlock>
                <ProductImage src={product.image}/>
                {!(mobile) && (
                    <FavsButton>
                        <IconButton onClick={handleAddToFavs}>
                            {isFavourite ? <HeartFilled />: <HeartOutlined />}                   
                        </IconButton>
                    </FavsButton> 
                )}
            </ImageBlock>

            <InfoBlock>
                <ProductTitle>
                    <Title variant='p'>
                        <Link to={fullPageURL}>{product.title}</Link> 
                    </Title>
                </ProductTitle>
                <ProductDescription> {product.subtitle} </ProductDescription>
                <PriceRatingInfo>
                    <ProductPrice> {product.price} </ProductPrice>
                    <ProductRating><Rating name="read-only" value={+bookRating} readOnly /></ProductRating>
                </PriceRatingInfo>
            </InfoBlock>

            {mobile && (
                <LikeBlock>
                    <IconButton onClick={handleAddToFavs}>
                        {isFavourite ? <HeartFilled />: <HeartOutlined />}
                    </IconButton>
                </LikeBlock>
            ) }


            
        </CardWrapper>
    );
};

export default FavouriteCard;
