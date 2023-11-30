import { productsActions } from "./productsActions";
import { productsApi } from "../../client/api/productsApi";
import { Dispatch } from "redux";
import { paginationActions } from "../Pagination/paginationActions";

const getProducts = async(page?: number) => {
    return await productsApi.getAllProducts(page);
};

export const getProductsAsync = (page?: number) => {
    return async (dispatch: Dispatch) => {
        const { data } = await getProducts(page);
        dispatch(paginationActions.getProductsCount(data));
        dispatch(productsActions.getProducts(data.books));
    };
};

const getNewProducts = async() => {
    return await productsApi.getNewProducts();
};

export const getNewProductsAsync = (page?: number) => {
    return async (dispatch: Dispatch) => {
        const { data } = await getNewProducts();
        dispatch(productsActions.getNewProducts(data.books));
    };
};
