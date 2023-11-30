import React, {useRef} from 'react';
import Slider from 'react-slick';
import Title from '../TextComponents/Title/Title';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IBookInfo } from '../../../store/types';
import RecentlyViewedCard from '../ProductCards/RecentlyViewedCard/RecentlyViewedCard';
import { SliderWrapper, SliderContent } from './styles';
import { useMediaQueries } from '../../hooks/useMediaQuery';

const RecentlyViewedSlider = () => {
    const recentlyViewedProducts = useTypedSelector(state => state.products.recentlyViewedProducts);
    const { mobile , tablet , laptop } = useMediaQueries();

    const table:any = {};
    const uniqueArr = recentlyViewedProducts.filter(({ isbn13 }) => (
        !table[isbn13] && (table[isbn13] = 1)
    ));
    const productsToShow = uniqueArr.reverse();

    const getSettings = () => {
        if(laptop) {
            var settings = {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
            };

            return settings;
        } else if(tablet) {
            var settings = {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
            };

            return settings;
        } else if(mobile) {
            var settings = {
                dots: false,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            };

            return settings;
        };
    };

    var settings = getSettings();

    return (
        <SliderWrapper>
            <Title variant='h2'> recently viewed products </Title>
            <SliderContent {...settings}>
                {recentlyViewedProducts && productsToShow.map((book:IBookInfo) => <RecentlyViewedCard book={book} key={book.isbn13}/>)}
            </SliderContent>
            
        </SliderWrapper>
    );
};

export default RecentlyViewedSlider;