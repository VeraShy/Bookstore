import React, { FC } from 'react';
import BackLink from '../../components/Buttons/BackLinkButton/BackLink';
import Title from '../../components/TextComponents/Title/Title';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import FavouriteCard from '../../components/ProductCards/FavouriteCard/FavouriteCard';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import { PageWrapper , PageTitle , PageContent } from './styles';

const FavouritesPage = () => {
    const favouriteProducts = useTypedSelector(state => state.products.favouriteProducts);
    const { mobile , tablet , laptop } = useMediaQueries();

    return (
        <PageWrapper>
            <BackLink />
            <PageTitle>
                { mobile ? <Title variant='h1'>favourites</Title> : <Title variant='h2'>favourites</Title> }
            </PageTitle>

            <PageContent>
                {favouriteProducts && favouriteProducts.map((product:any) => <FavouriteCard product={product} key={product.isbn13}/>)}
            </PageContent>            
        </PageWrapper>
    );
};

export default FavouritesPage;