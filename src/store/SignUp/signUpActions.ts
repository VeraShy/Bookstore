import { baseActionType, baseActionTypeWithPayload } from "../types";
import { UserCredential } from "firebase/auth";

export enum actionTypesEnum {
    SIGN_UP_SUCCESS = 'SIGN_UP',
    SIGN_UP_FAIL = 'SIGN_UP_FAIL',
    RESET_SIGN_UP_STATUS = 'RESET_SIGN_UP_STATUS',
};

interface ISignUpActions {
    signUpSuccess: (responseData: UserCredential) => baseActionTypeWithPayload<actionTypesEnum.SIGN_UP_SUCCESS, UserCredential>,
    signUpFail: (error: string) => baseActionTypeWithPayload<actionTypesEnum.SIGN_UP_FAIL, string>,
    resetSignUpStatus: () => baseActionType<actionTypesEnum.RESET_SIGN_UP_STATUS>,
};

export const signUpActions: ISignUpActions = {
    signUpSuccess: (responseData: UserCredential) => ({
        type: actionTypesEnum.SIGN_UP_SUCCESS,
        payload: responseData,
    }),
    signUpFail: (error: string) => ({
        type: actionTypesEnum.SIGN_UP_FAIL,
        payload: error,
    }),
    resetSignUpStatus: () => ({
        type: actionTypesEnum.RESET_SIGN_UP_STATUS,
    }),
};