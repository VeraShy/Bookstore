import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { productsActions } from "../Products/productsActions";
import { getNewProductsAsync, getProductsAsync } from "../Products/getProducts";
import { productInfoActions } from "../ProductInfo/productInfoActions";
import { getProductInfo } from "../ProductInfo/getProductInfo";
import { searchProductsAsync } from "../Products/getProducts";
import { bookPreviewActions } from "../BookPreview/bookPreviewActions";
import { cartActions } from "../Cart/cartActions";
import { paginationActions } from "../Pagination/paginationActions";
import { signUpActions } from "../SignUp/signUpActions";
import { userSessionActions } from "../UserSession/userSessionActions";
import { userSignUp } from "../SignUp/signUp";
import { userSignIn , userSignOut , authorizeUser } from "../UserSession/signIn";
import { changeUserName , resetPassword , changePassword } from "../UserSession/manageAccount";
import { errorsActions } from "../Errors/errorsActions";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({
        ...productsActions,
        ...productInfoActions,
        ...bookPreviewActions,
        ...cartActions,
        ...paginationActions,
        ...signUpActions,
        ...userSessionActions,
        ...errorsActions,
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