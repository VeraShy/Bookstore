import React from 'react';

import { ArrowBack , ArrowForward} from '@mui/icons-material';
import Title from '../TextComponents/Title/Title';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IBookInfo, IProduct } from '../../../store/types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import RecentlyViewedCard from '../ProductCards/RecentlyViewedCard/RecentlyViewedCard';
import { RecentlyViewedWrapper , SliderCard } from './styles';

const RecentlyViewedSlider = () => {
    const recentlyViewedProducts = useTypedSelector(state => state.products.recentlyViewedProducts);
    

    return (
        <RecentlyViewedWrapper>
            <Title variant='h2'>Recently Viewed Books</Title>
            <Carousel>
            {recentlyViewedProducts && recentlyViewedProducts.map((book:IBookInfo) => <RecentlyViewedCard book={book} key={book.isbn13}/>)}
            
            </Carousel>
        </RecentlyViewedWrapper>
    );
};

export default RecentlyViewedSlider;