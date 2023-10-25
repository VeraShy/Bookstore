import { baseActionTypeWithPayload , IBookInfo } from "../types";

export enum actionTypesEnum {
    GET_PRODUCT_INFO = 'GET_PRODUCT_INFO',
    GET_BOOK_RATING = 'GET_BOOK_RATING',
};

interface IProductInfoActions {
    getProductInfo: (product: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.GET_PRODUCT_INFO, IBookInfo>;
    getBookRating: (product: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.GET_BOOK_RATING, IBookInfo>;
};

export const productInfoActions:IProductInfoActions = {
    getProductInfo: (product) => ({
        type: actionTypesEnum.GET_PRODUCT_INFO,
        payload: product,
    }),
    getBookRating: (product) => ({
        type: actionTypesEnum.GET_BOOK_RATING,
        payload: product,
    }),
};