import { baseActionTypeWithPayload , IProduct } from "../types";

export enum actionTypesEnum {
    GET_PRODUCTS_COUNT = 'GET_PRODUCTS_COUNT',
};

export interface IResponse {
    books: IProduct[],
    error: string,
    page: string,
    total: string,
};

interface IPaginationActions {
    getProductsCount: (response: IResponse) => baseActionTypeWithPayload<actionTypesEnum.GET_PRODUCTS_COUNT, IResponse>,
};

export const paginationActions: IPaginationActions = {
    getProductsCount: (response) => ({
        type: actionTypesEnum.GET_PRODUCTS_COUNT,
        payload: response, 
    }),
};
