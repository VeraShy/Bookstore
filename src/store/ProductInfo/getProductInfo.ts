import { productsApi } from "../../client/api/productsApi";
import { productInfoActions } from "./productInfoActions";
import { Dispatch } from "@reduxjs/toolkit";

const fetchProductInfo = async(isbn13:string) => {
    return await productsApi.getProductInfo(isbn13)
};

export const getProductInfo = (isbn13:string) => {
    return async(dispatch: Dispatch) => {
        const { data } = await fetchProductInfo(isbn13);
        dispatch(productInfoActions.getProductInfo(data))
    }
};

