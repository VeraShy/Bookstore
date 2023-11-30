import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../../store/Hooks/useTypedSelector';
import { IBookInfo } from '../../../store/types';
import BackLink from '../../components/Buttons/BackLinkButton/BackLink';
import Title from '../../components/TextComponents/Title/Title';
import InCartCard from '../../components/ProductCards/InCartCard/InCartCard';
import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
import { useMediaQueries } from '../../hooks/useMediaQuery';
import { PageWrapper , PageTitle , PageContent , CartTotal , TotalLine , TotalLineResult, TotalLineText , TotalLineNum , ButtonWrapper } from './styles';

const CartPage = () => {
    const navigate = useNavigate();
    const inCartProducts = useTypedSelector(state => state.cart.inCartProducts);
    const totalPrice = (useTypedSelector(state => state.cart.totalPrice)).toFixed(2);
    const { mobile , tablet , laptop } = useMediaQueries();

    const totalPriceInclVat = (+totalPrice * 120/100).toFixed(2);
    const totalVat = (+totalPriceInclVat - +totalPrice).toFixed(2);

    const handleCheckout = () => {
        navigate('/cart/checkout');
    };

    return (
        <PageWrapper>
            <BackLink />
            <PageTitle>
                { mobile ? <Title variant='h1'>cart</Title> : <Title variant='h2'>cart</Title> }
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
                    <ButtonWrapper>
                        <CustomButton 
                            content='checkout' 
                            variant='filled' 
                            onBtnClick={handleCheckout}/>
                    </ButtonWrapper>
                </CartTotal>
            </PageContent>
        </PageWrapper>
    );
};

export default CartPage;