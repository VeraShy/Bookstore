import { baseActionTypeWithPayload , IProduct , IBookInfo } from "../types";
import { actionTypesEnum } from "./productsActions";

type defaultStateType = {
    allProducts: IProduct [],
    newProducts: IProduct [],
    favouriteProducts: IBookInfo [],
    recentlyViewedProducts: IBookInfo [],
};

const defaultState: defaultStateType = {
    allProducts: [],
    newProducts: [],
    favouriteProducts: [],
    recentlyViewedProducts: [],
};

export const productsReducer = (
    state = defaultState,
    action: baseActionTypeWithPayload<actionTypesEnum, IBookInfo | IProduct[]>):defaultStateType => {
    switch(action.type) {
        case actionTypesEnum.GET_PRODUCTS:
            if(Array.isArray(action.payload)) {
                return {...state, allProducts: [...action.payload.map((product) => ({
                    ...product
                })) as IProduct[]] };
            }

            return state;       
        case actionTypesEnum.GET_NEW_PRODUCTS:
            if(Array.isArray(action.payload)) {
                return {...state, newProducts: [...action.payload.map((product) => ({
                    ...product
                })) as IProduct[]] };
            }
    
            return state;    
        case actionTypesEnum.ADD_TO_FAVS:
            if(!Array.isArray(action.payload)) {
                return {...state, favouriteProducts: [...state.favouriteProducts, action.payload]};
            }
    
            return state;
        case actionTypesEnum.REMOVE_FROM_FAVS:
            if(!Array.isArray(action.payload)) {
                return {...state, favouriteProducts: state.favouriteProducts.filter((book) => book.isbn13 !== (action.payload as unknown as IBookInfo).isbn13)};
            }
        
            return state;
        case actionTypesEnum.ADD_TO_VIEWED:
            if(!Array.isArray(action.payload)) {
                if(!state.recentlyViewedProducts.includes(action.payload)) {
                    return {...state, recentlyViewedProducts: [...state.recentlyViewedProducts, action.payload]};
                } else return state;
            }
        
            return state;

        default: 
            return state;
    }
};
