import { baseActionType, baseActionTypeWithPayload, IProduct } from "../types";

export enum actionTypesEnum {
    GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS',
    SEARCH = 'SEARCH',
    CLEAR_INPUT = 'CLEAR_INPUT',
};

interface ISearchActions {
    getSearchResults: (products: IProduct[]) => baseActionTypeWithPayload<actionTypesEnum.GET_SEARCH_RESULTS, IProduct[]>;
    searchInputActive: () => baseActionType<actionTypesEnum.SEARCH>;
    clearSearchInput: () => baseActionType<actionTypesEnum.CLEAR_INPUT>;
};

export const searchActions: ISearchActions = {
    getSearchResults: (products: IProduct[]) => ({
        type: actionTypesEnum.GET_SEARCH_RESULTS,
        payload: products,
    }),
    searchInputActive: () => ({
        type: actionTypesEnum.SEARCH,
    }),
    clearSearchInput: () => ({
        type: actionTypesEnum.CLEAR_INPUT,
    }),
};