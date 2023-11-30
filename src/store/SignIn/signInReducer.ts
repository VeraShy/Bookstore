import { baseActionType, baseActionTypeWithPayload } from "../types";
import { actionTypesEnum } from "./signInActions";
import { UserCredential , User } from "firebase/auth";

type defaultStateType = {
    isSignedIn: boolean,
    signInError: string | null,
    userSignInData: UserCredential | null,
    userData: UserCredential | User | null,
};

const defaultState: defaultStateType = {
    isSignedIn: false,
    signInError: null,
    userSignInData: null,
    userData: null,
};

export const signInReducer = (
    state = defaultState,
    action: 
        baseActionTypeWithPayload<actionTypesEnum.SIGN_IN_SUCCESS, UserCredential> | 
        baseActionTypeWithPayload<actionTypesEnum.SIGN_IN_FAIL, string> | 
        baseActionTypeWithPayload<actionTypesEnum.AUTHORIZE, User> |
        baseActionType<actionTypesEnum.SIGN_OUT> 
): defaultStateType => {
    switch(action.type) {
        case actionTypesEnum.SIGN_IN_SUCCESS:
            return {...state, isSignedIn: true, userSignInData: action.payload, signInError: null};
        case actionTypesEnum.SIGN_IN_FAIL:
            return {...state, isSignedIn: false, signInError: action.payload};           
        case actionTypesEnum.SIGN_OUT:
            return {...state, isSignedIn: false, userSignInData: null, userData: null, signInError: null};
        case actionTypesEnum.AUTHORIZE:
            return {...state, isSignedIn: true, userData: action.payload, signInError: null};
        default:
            return state;
    };
};