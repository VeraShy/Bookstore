import React from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IBookInfo } from '../../../store/types';
import BackLink from '../../components/Buttons/BackLinkButton/BackLink';
import Title from '../../components/TextComponents/Title/Title';
import InCartCard from '../../components/ProductCards/InCartCard/InCartCard';
import { PageWrapper , PageTitle , PageContent , CartTotal , TotalLine , TotalLineResult, TotalLineText , TotalLineNum } from './styles';

const CartPage = () => {
    const inCartProducts = useTypedSelector(state => state.cart.inCartProducts);
    const totalPrice = (useTypedSelector(state => state.cart.totalPrice)).toFixed(2);
    const totalPriceInclVat = (+totalPrice * 120/100).toFixed(2);
    const totalVat = (+totalPriceInclVat - +totalPrice).toFixed(2);

    return (
        <PageWrapper>
            <BackLink />
            <PageTitle>
                <Title variant='h1'>cart</Title>
            </PageTitle>

            <PageContent>
                {inCartProducts.length ? 
                    (inCartProducts.map((book:IBookInfo) => <InCartCard book={book} key={book.isbn13}/>)) : 
                    (<Title variant='p'>Your cart is empty... <br/> <Link to='/all-books'>Start shopping!</Link></Title>)}
                <CartTotal>
                    <TotalLine>
                        <TotalLineText>Sum total</TotalLineText>
                        <TotalLineNum> {'$' + totalPrice} </TotalLineNum>
                    </TotalLine>
                    <TotalLine>
                        <TotalLineText>VAT</TotalLineText>
                        <TotalLineNum> {'$' + totalVat} </TotalLineNum>
                    </TotalLine>
                    <TotalLineResult>
                        <TotalLineText>TOTAL:</TotalLineText>
                        <TotalLineNum> {'$' + totalPriceInclVat} </TotalLineNum>
                    </TotalLineResult>
                    
                </CartTotal>
            </PageContent>
        </PageWrapper>
    );
};

export default CartPage;