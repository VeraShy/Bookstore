import { baseActionType, baseActionTypeWithPayload, UserDataType } from "../types";
import { UserCredential , UserInfo , User } from "firebase/auth";

export enum actionTypesEnum {
    CHANGE_USER_NAME = 'CHANGE_USER_NAME',
    CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS',
    CHANGE_PASSWORD_FAIL = 'CHANGE_PASSWORD_FAIL',
    RESET_PASSWORD = 'RESET_PASSWORD',
    RESET_ACCOUNT_STATUS = 'RESET_ACCOUNT_STATUS',
};

interface IUserAccountActions {
    changeUserName: (newName: string) => baseActionTypeWithPayload<actionTypesEnum.CHANGE_USER_NAME, string>,
    changePasswordSuccess: (newPassword: string) => baseActionTypeWithPayload<actionTypesEnum.CHANGE_PASSWORD_SUCCESS, string>,
    changePasswordFail: (error: string) => baseActionTypeWithPayload<actionTypesEnum.CHANGE_PASSWORD_FAIL, string>,
    resetPassword: (email: string) => baseActionTypeWithPayload<actionTypesEnum.RESET_PASSWORD, string>,
    resetAccountStatus: () => baseActionType<actionTypesEnum.RESET_ACCOUNT_STATUS>,
};

export const userAccountActions: IUserAccountActions = {
    changeUserName: (newName: string) => ({
        type: actionTypesEnum.CHANGE_USER_NAME,
        payload: newName,
    }),
    changePasswordSuccess: (newPassword: string) => ({
        type: actionTypesEnum.CHANGE_PASSWORD_SUCCESS,
        payload: newPassword,
    }),
    changePasswordFail: (error: string) => ({
        type: actionTypesEnum.CHANGE_PASSWORD_FAIL,
        payload: error,
    }),
    resetPassword: (email: string) => ({
        type: actionTypesEnum.RESET_PASSWORD,
        payload: email,
    }),
    resetAccountStatus: () => ({
        type: actionTypesEnum.RESET_ACCOUNT_STATUS,
    }),
};