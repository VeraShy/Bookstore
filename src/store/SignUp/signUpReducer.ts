import { baseActionType, baseActionTypeWithPayload } from "../types";
import { actionTypesEnum } from "./signUpActions";
import { UserCredential } from "firebase/auth";

type DefaultStateType = {
    isSignUpSuccessful: boolean,
    userSignUpData: UserCredential | null,
    signUpErrorMessage: string | null,
};

const defaultState: DefaultStateType = {
    isSignUpSuccessful: false,
    userSignUpData: null,
    signUpErrorMessage: null,
};

export const signUpReducer = (
    state = defaultState,
    action: baseActionType<actionTypesEnum.RESET_SIGN_UP_STATUS> | 
            baseActionTypeWithPayload<actionTypesEnum.SIGN_UP, UserCredential> |
            baseActionTypeWithPayload<actionTypesEnum.SHOW_SIGN_UP_ERROR_MESSAGE, string> | 
            baseActionType<actionTypesEnum.CLEAR_SIGN_UP_ERROR_MESSAGE>
): DefaultStateType => {
    switch(action.type) {
        case actionTypesEnum.SIGN_UP:
            return {...state, isSignUpSuccessful: true, userSignUpData: action.payload, signUpErrorMessage: null};
        case actionTypesEnum.RESET_SIGN_UP_STATUS:
            return {...state, isSignUpSuccessful: false, userSignUpData: null, signUpErrorMessage: null};
        case actionTypesEnum.SHOW_SIGN_UP_ERROR_MESSAGE:
            return {...state, signUpErrorMessage: action.payload};
        case actionTypesEnum.CLEAR_SIGN_UP_ERROR_MESSAGE:
            return {...state, signUpErrorMessage: null};
        default:
            return state;
    };
};