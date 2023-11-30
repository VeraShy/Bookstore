import React, { FC, useState , useEffect } from 'react';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import FullBookCard from '../../components/ProductCards/FullBookCard/FullBookCard';
import ErrorMessage from '../../components/Error/Error';
import { IBookInfo , IProduct } from '../../../store/types';
import BackLink from '../../components/Buttons/BackLinkButton/BackLink';
import SubscribeBlock from '../../components/SubscribeBlock/SubscribeBlock';
import SocialButtons from '../../components/Buttons/SocialButtons/SocialButtons';
import BookPreviewPopup from '../../components/BookPreviewPopup/BookPreviewPopup';
import RecentlyViewedSlider from '../../components/Slider/Slider';
import { PageWrapper } from './styles';

interface IBookPageProps {
    isbn13: string,
};

const getBookById = async(isbn13: string): Promise<IBookInfo> => {
    const response = await fetch(`https://api.itbook.store/1.0/books/${isbn13}`);

    return await response.json();
};

const BookPage: FC<IBookPageProps> = () => {
    const [book, setBook] = useState<IBookInfo>();
    const { isbn13 } = useParams();
    const openedPopup = useTypedSelector(state => state.bookPreview.openedPopup);

    useEffect(() => {
        window.scrollTo(0, 0);
        getBookById(isbn13!).then((book) => {
            setBook(book)
        });
    }, [isbn13]);

    return (
        <PageWrapper>
            <BackLink />
            { book ? <FullBookCard book={book}/> : <ErrorMessage />}   
            <SocialButtons />
            <SubscribeBlock /> 
            <RecentlyViewedSlider></RecentlyViewedSlider>
            {openedPopup && <BookPreviewPopup />}    
        </PageWrapper>
    );
};

export default BookPage;