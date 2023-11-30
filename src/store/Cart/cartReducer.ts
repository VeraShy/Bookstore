import { bookPreviewActions } from "../BookPreview/bookPreviewActions";
import { baseActionType , baseActionTypeWithPayload , IBookInfo } from "../types";
import { actionTypesEnum } from "./cartActions";

type defaultStateType = {
    inCartProducts: IBookInfo [],
    totalPrice: number,
};

const defaultState: defaultStateType = {
    inCartProducts: [],
    totalPrice: 0,
};

export const cartReducer = (
    state = defaultState,
    action: baseActionTypeWithPayload<actionTypesEnum, IBookInfo>
) => {
    switch(action.type) {
        case actionTypesEnum.ADD_TO_CART:
            return {
                ...state, 
                payload: action.payload.qty = 1,
                inCartProducts: [...state.inCartProducts, action.payload],  
                totalPrice: state.totalPrice + +(action.payload.price).replace('$', ''),
            };
        case actionTypesEnum.REMOVE_FROM_CART:
            return {...state, 
                payload: action.payload.qty = 0,
                inCartProducts: state.inCartProducts.filter((book) => book.isbn13 !== (action.payload as unknown as IBookInfo).isbn13),
                totalPrice: state.totalPrice - +(action.payload.price).replace('$', ''),
            };
        case actionTypesEnum.PLUS_PRODUCT:
            return {...state,
                inCartProducts: [...state.inCartProducts.map((item) => item.isbn13 === action.payload.isbn13 ? {...item, qty: item.qty + 1} : item)],
                totalPrice: state.totalPrice + +(action.payload.price).replace('$', ''),
            };
        case actionTypesEnum.MINUS_PRODUCT:
            return {...state,
                inCartProducts: [...state.inCartProducts.map((item) => ((item.isbn13 === action.payload.isbn13) && item.qty > 1)  ? {...item, qty: item.qty - 1} : item)],
                totalPrice: state.totalPrice - +(action.payload.price).replace('$', ''),
            };
        default: 
            return state;
    }
}