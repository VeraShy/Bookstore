import React, { FC } from 'react';
import BackLink from '../../components/Buttons/BackLinkButton/BackLink';
import Title from '../../components/TextComponents/Title/Title';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import FavouriteCard from '../../components/ProductCards/FavouriteCard/FavouriteCard';
import { PageWrapper , PageTitle , PageContent } from './styles';

const FavouritesPage = () => {
    const favouriteProducts = useTypedSelector(state => state.products.favouriteProducts);

    return (
        <PageWrapper>
            <BackLink />
            <PageTitle>
                <Title variant='h1'>favourites</Title>
            </PageTitle>

            <PageContent>
                {favouriteProducts && favouriteProducts.map((product:any) => <FavouriteCard product={product} key={product.isbn13}/>)}
            </PageContent>            
        </PageWrapper>
    );
};

export default FavouritesPage;