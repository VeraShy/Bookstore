import { baseActionTypeWithPayload , baseActionType , IProduct , IBookInfo } from "../types";
import { actionTypesEnum } from "./paginationActions";
import { IResponse } from "./paginationActions";

type defaultStateType = {
    productsCount: string,
};

const defaultState: defaultStateType = {
    productsCount: '',
};

export const paginationReducer = (
    state = defaultState,
    action: baseActionTypeWithPayload<actionTypesEnum, IResponse>): defaultStateType => {
    switch (action.type) {
        case actionTypesEnum.GET_PRODUCTS_COUNT:
            return {...state, productsCount: action.payload.total};
            
        default:
            return state;
    }
};