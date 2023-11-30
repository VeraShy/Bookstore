import { baseActionType, baseActionTypeWithPayload } from "../types";
import { UserCredential , User } from "firebase/auth";

export enum actionTypesEnum {
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_FAIL = 'SIGN_IN_FAIL',
    SIGN_OUT = 'SIGN_OUT',
    AUTHORIZE = 'AUTHORIZE',
};

interface ISignInActions {
    signInSuccess: (userData: UserCredential) => baseActionTypeWithPayload<actionTypesEnum.SIGN_IN_SUCCESS, UserCredential>,
    signInFail: (error: string) => baseActionTypeWithPayload<actionTypesEnum.SIGN_IN_FAIL, string>,
    signOut: () => baseActionType<actionTypesEnum.SIGN_OUT>,
    authorize: (userData: User) => baseActionTypeWithPayload<actionTypesEnum.AUTHORIZE, User>,
};

export const signInActions: ISignInActions = {
    signInSuccess: (userData: UserCredential) => ({
        type: actionTypesEnum.SIGN_IN_SUCCESS,
        payload: userData,
    }),
    signInFail: (error: string) => ({
        type: actionTypesEnum.SIGN_IN_FAIL,
        payload: error,
    }),
    signOut: () => ({
        type: actionTypesEnum.SIGN_OUT,
    }),
    authorize: (userData: User) => ({
        type: actionTypesEnum.AUTHORIZE,
        payload: userData,
    }),
};