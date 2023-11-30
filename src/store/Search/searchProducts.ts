import { searchActions } from "./searchActions";
import { productsApi } from "../../client/api/productsApi";
import { Dispatch } from "redux";
import { paginationActions } from "../Pagination/paginationActions";

const searchProducts = async(search?: any, page?: number) => {
    return await productsApi.searchProduct(search, page)
};

export const searchProductsAsync = (search?: any, page?: number) => {
    return async (dispatch: Dispatch) => {
        const { data } = await searchProducts(search, page);
        dispatch(paginationActions.getProductsCount(data));
        dispatch(searchActions.getSearchResults(data.books));
    };
};