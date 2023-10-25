import { Book } from "@mui/icons-material";
import { setTextRange } from "typescript";
import { baseActionTypeWithPayload , IBookInfo } from "../types";
import { actionTypesEnum } from "./productInfoActions";

type defaultStateType = {
    productInfo: IBookInfo | {},
    bookRating: string,
};

const defaultState: defaultStateType = {
    productInfo: {},
    bookRating: '',
};

export const productInfoReducer = (
    state = defaultState,
    action: baseActionTypeWithPayload<actionTypesEnum, IBookInfo >
): defaultStateType => {
    switch(action.type) {
        case actionTypesEnum.GET_PRODUCT_INFO: 
            return {...state, productInfo: action.payload};
        case actionTypesEnum.GET_BOOK_RATING:
            return {...state, bookRating: action.payload.rating};
        default: 
            return state;
    }
};