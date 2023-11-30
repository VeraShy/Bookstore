import { baseActionType, baseActionTypeWithPayload , IProduct } from "../types";
import { actionTypesEnum } from "./searchActions";

type defaultStateType = {
    searchResults: IProduct [],
    isSearchActive: boolean,
};

const defaultState: defaultStateType = {
    searchResults: [],
    isSearchActive: false,
};

export const searchReducer = (
    state = defaultState, 
    action: baseActionType<actionTypesEnum.SEARCH> | 
            baseActionType<actionTypesEnum.CLEAR_INPUT> | 
            baseActionTypeWithPayload<actionTypesEnum.GET_SEARCH_RESULTS, IProduct[]>
): defaultStateType => {
    switch(action.type) {
        case actionTypesEnum.GET_SEARCH_RESULTS:
            return {...state, searchResults: [...action.payload.map((product) => ({
                ...product
            })) as IProduct[]] };
        case actionTypesEnum.SEARCH:
            return {...state, isSearchActive: true};
        case actionTypesEnum.CLEAR_INPUT:
            return {...state, isSearchActive: false};
        default:
            return state;
    };
};