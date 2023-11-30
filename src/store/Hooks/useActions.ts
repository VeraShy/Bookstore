import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { productsActions } from "../Products/productsActions";
import { getNewProductsAsync, getProductsAsync } from "../Products/getProducts";
import { productInfoActions } from "../ProductInfo/productInfoActions";
import { getProductInfo } from "../ProductInfo/getProductInfo";
import { searchProductsAsync } from "../Search/searchProducts";
import { bookPreviewActions } from "../BookPreview/bookPreviewActions";
import { cartActions } from "../Cart/cartActions";
import { paginationActions } from "../Pagination/paginationActions";
import { signUpActions } from "../SignUp/signUpActions";
import { userAccountActions } from "../UserAccount/userAccountActions";
import { userSignUp } from "../SignUp/signUp";
import { userSignIn , userSignOut , authorizeUser } from "../SignIn/signIn";
import { changeUserName , resetPassword , changePassword } from "../UserAccount/userAccount";
import { searchActions } from "../Search/searchActions";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({
        ...productsActions,
        ...productInfoActions,
        ...bookPreviewActions,
        ...cartActions,
        ...paginationActions,
        ...signUpActions,
        ...userAccountActions,
        ...searchActions,
        getProductsAsync,
        getNewProductsAsync,
        getProductInfo,
        searchProductsAsync,
        userSignUp,
        userSignIn,
        userSignOut,
        changeUserName,
        changePassword,
        resetPassword,
        authorizeUser,
    }, 
    dispatch);
};