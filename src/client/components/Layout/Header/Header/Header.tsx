import React from 'react';
import { Link , Navigate , useNavigate } from 'react-router-dom';
import SearchBar from '../../../SearchBar/SearchBar';
import FavouritesButton from '../../../Favourites/FavouritesButton';
import CartButton from '../../../Cart/CartButton';
import LogInButton from '../../../LogIn/LogInButton';
import { useTypedSelector } from '../../../../../store/Hooks/useTypedSelector';
import { StyledHeader , HeaderWrapper , HeaderLogo , HeaderSearchBar , HeaderActionButtons } from './styles';

const Header = () => {
    const { isSignedIn , userSignInData } = useTypedSelector(state => state.session);
    const navigate = useNavigate();

    const handleUserNavigate = () => {
        if(isSignedIn) {
            navigate('/account')
        } else navigate('/sign-up')
    };

    return (
        <StyledHeader>
            <HeaderWrapper>
                <HeaderLogo><Link to={'/'}>BOOKSTORE</Link></HeaderLogo>           
                <HeaderSearchBar>
                    <SearchBar />
                </HeaderSearchBar>
                <HeaderActionButtons>
                    <Link to={'/favourites'}><FavouritesButton /></Link>
                    <Link to={'/cart'}><CartButton /></Link>
                    <LogInButton onBtnClick={handleUserNavigate}></LogInButton>
                </HeaderActionButtons>  
            </HeaderWrapper>
        </StyledHeader>
    );
};

export default Header;