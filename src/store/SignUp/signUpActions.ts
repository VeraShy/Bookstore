import { baseActionType, baseActionTypeWithPayload } from "../types";
import { UserCredential } from "firebase/auth";

export enum actionTypesEnum {
    SIGN_UP = 'SIGN_UP',
    RESET_SIGN_UP_STATUS = 'RESET_SIGN_UP_STATUS',
    SHOW_SIGN_UP_ERROR_MESSAGE = 'SHOW_SIGN_UP_ERROR_MESSAGE',
    CLEAR_SIGN_UP_ERROR_MESSAGE = 'CLEAR_SIGN_UP_ERROR_MESSAGE',
};

interface ISignUpActions {
    signUpSuccess: (responseData: UserCredential) => baseActionTypeWithPayload<actionTypesEnum.SIGN_UP, UserCredential>,
    resetSignUpStatus: () => baseActionType<actionTypesEnum.RESET_SIGN_UP_STATUS>,
    showSignUpErrorMessage: (error: string) => baseActionTypeWithPayload<actionTypesEnum.SHOW_SIGN_UP_ERROR_MESSAGE, string>,
    clearSignUpErrorMessage: () => baseActionType<actionTypesEnum.CLEAR_SIGN_UP_ERROR_MESSAGE>,
};

export const signUpActions: ISignUpActions = {
    signUpSuccess: (responseData: UserCredential) => ({
        type: actionTypesEnum.SIGN_UP,
        payload: responseData,
    }),
    resetSignUpStatus: () => ({
        type: actionTypesEnum.RESET_SIGN_UP_STATUS,
    }),
    showSignUpErrorMessage: (error: string) => ({
        type: actionTypesEnum.SHOW_SIGN_UP_ERROR_MESSAGE,
        payload: error,
    }),
    clearSignUpErrorMessage: () => ({
        type: actionTypesEnum.CLEAR_SIGN_UP_ERROR_MESSAGE,
    }),
};