import { baseActionTypeWithPayload , IProduct , IBookInfo } from "../types";

export enum actionTypesEnum {
    GET_PRODUCTS = 'GET_PRODUCTS',
    GET_NEW_PRODUCTS = 'GET_NEW_PRODUCTS',
    ADD_TO_FAVS = 'ADD_TO_FAVS',
    REMOVE_FROM_FAVS = 'REMOVE_FROM_FAVS',
    ADD_TO_VIEWED = 'ADD_TO_VIEWED',
};

interface IProductsActions {
    getProducts: (products: IProduct[]) => baseActionTypeWithPayload<actionTypesEnum.GET_PRODUCTS, IProduct[]>;
    getNewProducts: (products: IProduct[]) => baseActionTypeWithPayload<actionTypesEnum.GET_NEW_PRODUCTS, IProduct[]>;
    addToFavs: (book: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.ADD_TO_FAVS, IBookInfo>;
    removeFromFavs: (book: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.REMOVE_FROM_FAVS, IBookInfo>;
    addToViewed: (book: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.ADD_TO_VIEWED, IBookInfo>;
};

export const productsActions: IProductsActions = {
    getProducts: (products) => ({
        type: actionTypesEnum.GET_PRODUCTS,
        payload: products,
    }),
    getNewProducts: (products) => ({
        type: actionTypesEnum.GET_NEW_PRODUCTS,
        payload: products,
    }),
    addToFavs: (book) => ({
        type: actionTypesEnum.ADD_TO_FAVS,
        payload: book,
    }),
    removeFromFavs: (book) => ({
        type: actionTypesEnum.REMOVE_FROM_FAVS,
        payload: book,
    }),
    addToViewed: (book) => ({
        type: actionTypesEnum.ADD_TO_VIEWED,
        payload: book,
    }),
};

