import { baseActionType, baseActionTypeWithPayload } from "../types";
import { actionTypesEnum } from "./signUpActions";
import { UserCredential } from "firebase/auth";

type defaultStateType = {
    isSignUpSuccessful: boolean,
    signUpError: string | null,
    userSignUpData: UserCredential | null,
};

const defaultState: defaultStateType = {
    isSignUpSuccessful: false,
    signUpError: null,
    userSignUpData: null,
};

export const signUpReducer = (
    state = defaultState,
    action: baseActionType<actionTypesEnum.RESET_SIGN_UP_STATUS> | 
            baseActionTypeWithPayload<actionTypesEnum.SIGN_UP_SUCCESS, UserCredential> |
            baseActionTypeWithPayload<actionTypesEnum.SIGN_UP_FAIL, string> 
): defaultStateType => {
    switch(action.type) {
        case actionTypesEnum.SIGN_UP_SUCCESS:
            return {...state, isSignUpSuccessful: true, userSignUpData: action.payload, signUpError: null};
        case actionTypesEnum.SIGN_UP_FAIL:
            return {...state, isSignUpSuccessful: false, signUpError: action.payload};
        case actionTypesEnum.RESET_SIGN_UP_STATUS:
            return {...state, isSignUpSuccessful: false, userSignUpData: null, signUpError: null};
        default:
            return state;
    };
};