import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import SearchBar from '../../SearchBar/SearchBar';
import FavouritesButton from '../../Buttons/MenuButtons/Favourites/FavouritesButton';
import CartButton from '../../Buttons/MenuButtons/Cart/CartButton';
import LogInButton from '../../Buttons/MenuButtons/LogIn/LogInButton';
import MenuDropdown from './MenuDropdown/MenuDropdown';
import { auth } from '../../../../firebaseConfig';
import { StyledHeader , HeaderWrapper , HeaderLogo , HeaderSearchBar , HeaderActionButtons, HeaderTabletPanel } from './styles';

const Header = () => {
    const user = auth.currentUser;

    return (
        <StyledHeader>
            <HeaderWrapper>
                <HeaderLogo><Link to={'/'}>BOOKSTORE</Link></HeaderLogo>           
                <HeaderSearchBar><SearchBar /></HeaderSearchBar>
                <HeaderActionButtons>
                    <Link to={'/favourites'}><FavouritesButton /></Link>
                    <Link to={'/cart'}><CartButton /></Link>
                    <Link to={'/account'}><LogInButton /></Link>
                </HeaderActionButtons>  
                <HeaderTabletPanel>
                    <Link to={'/cart'}><CartButton /></Link>
                    <MenuDropdown></MenuDropdown>
                </HeaderTabletPanel>
            </HeaderWrapper>
        </StyledHeader>
    );
};

export default Header;