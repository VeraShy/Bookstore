import { baseActionType, baseActionTypeWithPayload } from "../types";
import { actionTypesEnum } from "./userSessionActions";
import { UserCredential , User } from "firebase/auth";

type DefaultStateType = {
    isSignedIn: boolean,
    userSignInData: UserCredential | null,
    userData: UserCredential | User | null,
    isNameChanged: boolean,
    newName: string | null,
    isPasswordChanged: boolean,
    newPassword: string | null,
    isResetEmailSent: boolean,
    resetPasswordEmail: string | null,
};

const defaultState: DefaultStateType = {
    isSignedIn: false,
    userSignInData: null,
    userData: null,
    isNameChanged: false,
    newName: null,
    isPasswordChanged: false,
    newPassword: null,
    isResetEmailSent: false,
    resetPasswordEmail: null,
};

export const userSessionReducer = (
    state = defaultState,
    action: 
        baseActionType<actionTypesEnum.SIGN_OUT> | 
        baseActionTypeWithPayload<actionTypesEnum.SIGN_IN, UserCredential> | 
        baseActionTypeWithPayload<actionTypesEnum.AUTHORIZE, User> |
        baseActionTypeWithPayload<actionTypesEnum.GET_USER_DATA, UserCredential | User> |
        baseActionTypeWithPayload<actionTypesEnum.CHANGE_USER_NAME, string> |
        baseActionTypeWithPayload<actionTypesEnum.CHANGE_PASSWORD, string> |
        baseActionTypeWithPayload<actionTypesEnum.RESET_PASSWORD, string> 
): DefaultStateType => {
    switch(action.type) {
        case actionTypesEnum.SIGN_IN:
            return {...state, isSignedIn: true, userSignInData: action.payload};
        case actionTypesEnum.SIGN_OUT:
            return {...state, isSignedIn: false, userSignInData: null, userData: null};
        case actionTypesEnum.AUTHORIZE:
            return {...state, isSignedIn: true, isNameChanged: false, isPasswordChanged: false};
        case actionTypesEnum.GET_USER_DATA:
            return {...state, userData: action.payload};
        case actionTypesEnum.CHANGE_USER_NAME:
            return {...state, isNameChanged: true, newName: action.payload};
        case actionTypesEnum.CHANGE_PASSWORD:
            return {...state, isPasswordChanged: true, newPassword: action.payload};
        case actionTypesEnum.RESET_PASSWORD:
            return {...state, isResetEmailSent: true, resetPasswordEmail: action.payload};
        default:
            return state;
    };
};