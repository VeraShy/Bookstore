import React, { FC , useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Menu , Close } from '@mui/icons-material';
import Title from '../../../TextComponents/Title/Title';
import { userRoutes } from '../../../../routes/userRoutes';
import { useTypedSelector } from '../../../../../store/Hooks/useTypedSelector';
import { useActions } from '../../../../../store/Hooks/useActions';
import SearchBarOnClick from '../../../SearchBar/SearchBarOnClick';
import CustomButton from '../../../Buttons/CustomButton/CustomButton';
import { MenuDropdownWrapper, MenuButton, MenuDropdownBackground, DropdownWrapper, CloseButtonWrapper, CloseButton, 
    DropdownContent, SearchWrapper, SearchButton, LinksWrapper, StyledLink, SignInButton } from './styles';

const MenuDropdown = () => {
    const [openDrop, setOpenDrop] = useState(false);
    const ref:any = useRef(null);
    const isSignedIn = useTypedSelector(state => state.signIn.isSignedIn);
    const { userSignOut } = useActions();
    const navigate = useNavigate();

    // useEffect(() => {
    //     const closeIfClickedOutside = (e:any) => {
    //         if (ref.current && !ref.current.contains(e.target)) {
    //             setOpenDrop(!openDrop);
    //             console.log('click');
    //         };
    //     };

    //     document.addEventListener("click", closeIfClickedOutside);
        
    //     return () => {
    //         document.removeEventListener("click", closeIfClickedOutside)
    //     }
    // }, [setOpenDrop]);
    
    const handleOpenDropdown = () => {
        setOpenDrop(!openDrop);
    };

    const handleSignOut = () => {
        userSignOut();
        setOpenDrop(false);
        navigate('/');
    };

    const handleSignInButtonClick = () => {
        navigate('/account');
        setOpenDrop(false);
    };
 
    return (
        <MenuDropdownWrapper>
            <MenuButton onClick={handleOpenDropdown}> <IconButton > <Menu /> </IconButton> </MenuButton>

            {openDrop && (
                <MenuDropdownBackground >
                    <DropdownWrapper ref={ref}>
                        <CloseButtonWrapper> 
                            <CloseButton onClick={handleOpenDropdown}> <IconButton > <Close /> </IconButton> </CloseButton> 
                        </CloseButtonWrapper>
                        {isSignedIn ? (
                            <DropdownContent>
                                <SearchWrapper>
                                    <SearchBarOnClick />
                                </SearchWrapper>
                                <LinksWrapper>
                                    {userRoutes.map((route) => {
                                        if(route.navLink) {
                                            return <StyledLink onClick={handleOpenDropdown}><NavLink  to = {route.path} key = {route.id}><Title variant='p'> {route.title} </Title></NavLink></StyledLink>
                                        }
                                    })}
                                </LinksWrapper>
                                <SignInButton>
                                    <CustomButton 
                                        isActive = {true} 
                                        content = {'sign out'} 
                                        variant = 'filled'
                                        onBtnClick = {handleSignOut} />  
                                </SignInButton>
                            </DropdownContent>
                        ) : (
                            <DropdownContent>
                                <SearchWrapper>
                                    <SearchBarOnClick/>
                                </SearchWrapper>
                                <LinksWrapper>
                                    {userRoutes.map((route) => {
                                        if(route.navLink) {
                                            return <StyledLink onClick={handleOpenDropdown}><NavLink to = {route.path} key = {route.id}><Title variant='p'> {route.title} </Title></NavLink></StyledLink>
                                        }
                                    })}
                                </LinksWrapper>
                                <SignInButton>
                                    <CustomButton 
                                        isActive = {true} 
                                        content = {'sign in'} 
                                        variant = 'filled'
                                        onBtnClick = {handleSignInButtonClick} /> 
                                </SignInButton>
                            </DropdownContent>
                        )}
                    </DropdownWrapper>
                </MenuDropdownBackground>
            )}  
        </MenuDropdownWrapper>
    );
};

export default MenuDropdown;