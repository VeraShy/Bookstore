import { FC } from 'react';
import { JsxElement } from 'typescript';
import MainPage from '../pages/MainPage/MainPage';
import NewBooksPage from '../pages/NewBooksPage/NewBooksPage';
import AllBooksPage from '../pages/AllBooksPage/AllBooksPage';
import BookPage from '../pages/BookPage/BookPage';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import CartPage from '../pages/CartPage/CartPage';
import SignUpPage from '../pages/RegistrationPage/RegistrationPage';
import RegistrationConfirmPage from '../pages/RegistrationConfirmPage/RegistrationConfirmPage';
import UserAccountPage from '../pages/UserAccountPage/UserAccountPage';
import ResetPasswordPage from '../pages/ResetPasswordPage/ResetPasswordPage';
import SearchResultsPage from '../pages/SearchResultsPage/SearchResultsPage';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

type UserRoutesType = {
    id: string | number,
    path: string,
    Component: FC<any>,
    additionalProps?: any,
    strict?: boolean,
    title?: string,
    navLink?: boolean,
};

export const userRoutes: UserRoutesType[] = [
    {
        id: 1,
        path: '/',
        Component: MainPage,
        title: 'Home',
        navLink: false,
    },
    {
        id: 2,
        path: '/new',
        Component: NewBooksPage,
        title: 'New Releases',
        navLink: false,
    },
    {
        id: 3,
        path: '/all-books',
        Component: AllBooksPage,
        title: 'All Books',
        navLink: false,
    },
    {
        id: 4,
        path: '/product/:isbn13',
        Component: BookPage,
        title: 'Product',
        navLink: false,
    },
    {
        id: 5,
        path: '/favourites',
        Component: FavouritesPage,
        title: 'Favourites',
        navLink: true,
    },
    {
        id: 6,
        path: '/cart',
        Component: CartPage,
        title: 'Cart',
        navLink: true,
    },
    {
        id: 7,
        path: '/registration',
        Component: SignUpPage,
        title: 'Registration',
        navLink: false,
    },
    {
        id: 8,
        path: '/registration/registration-confirm',
        Component: RegistrationConfirmPage,
        title: 'Registration Confirm',
        navLink: false,
    },
    {
        id: 9,
        path: '/account',
        Component: UserAccountPage,
        title: 'Account',
        navLink: true,
        strict: true,
    },
    {
        id: 10,
        path: '/password-reset',
        Component: ResetPasswordPage,
        title: 'Reset Password',
        navLink: false,
    },
    {
        id: 11,
        path: '/search/:value',
        Component: SearchResultsPage,
        title: 'Search Results',
        navLink: false,
    },
    {
        id: 12,
        path: '/cart/checkout',
        Component: CheckoutPage,
        title: 'Free e-books',
        navLink: false,
        strict: true,
    },
    {
        id: 99,
        path: '*',
        Component: NotFoundPage,
        navLink: false,
    },

]