import { baseActionType, baseActionTypeWithPayload } from "../types";
import { actionTypesEnum } from "./errorsActions";

type DefaultStateType = {
    errorMessage: string | null,
};

const defaultState: DefaultStateType = {
    errorMessage: null,
};

export const errorsReducer = (
    state = defaultState,
    action: baseActionTypeWithPayload<actionTypesEnum.SHOW_ERROR_MESSAGE, string> | baseActionType<actionTypesEnum.CLEAR_ERROR_MESSAGE>
): DefaultStateType => {
    switch (action.type) {
        case actionTypesEnum.SHOW_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload};
        case actionTypesEnum.CLEAR_ERROR_MESSAGE:
            return {...state, errorMessage: null};
        default:
            return state;
    };
};