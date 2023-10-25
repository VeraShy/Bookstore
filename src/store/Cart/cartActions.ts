import { baseActionTypeWithPayload, baseActionType, IBookInfo } from "../types";

export enum actionTypesEnum {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    PLUS_PRODUCT = 'PLUS_PRODUCT',
    MINUS_PRODUCT = 'MINUS_PRODUCT',
};

interface ICartActions {
    addToCart: (book: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.ADD_TO_CART, IBookInfo>;
    removeFromCart: (book: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.REMOVE_FROM_CART, IBookInfo>;
    plusProduct: (book: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.PLUS_PRODUCT, IBookInfo>;
    minusProduct: (book: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.MINUS_PRODUCT, IBookInfo>,
};

export const cartActions:ICartActions = {
    addToCart: (book) => ({
        type: actionTypesEnum.ADD_TO_CART,
        payload: book,
    }),
    removeFromCart: (book) => ({
        type: actionTypesEnum.REMOVE_FROM_CART,
        payload: book,
    }),
    plusProduct: (book) => ({
        type: actionTypesEnum.PLUS_PRODUCT,
        payload: book,
    }),
    minusProduct: (book) => ({
        type: actionTypesEnum.MINUS_PRODUCT,
        payload: book,
    }),
};