import { baseActionType, baseActionTypeWithPayload, UserDataType } from "../types";
import { UserCredential , UserInfo , User } from "firebase/auth";

export enum actionTypesEnum {
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
    AUTHORIZE = 'AUTHORIZE',
    GET_USER_DATA = 'GET_USER_DATA',
    CHANGE_USER_NAME = 'CHANGE_USER_NAME',
    CHANGE_PASSWORD = 'CHANGE_PASSWORD',
    RESET_PASSWORD = 'RESET_PASSWORD',
};

interface IUserSessionActions {
    signIn: (userData: UserCredential) => baseActionTypeWithPayload<actionTypesEnum.SIGN_IN, UserCredential>,
    signOut: () => baseActionType<actionTypesEnum.SIGN_OUT>,
    authorize: (userData: User) => baseActionTypeWithPayload<actionTypesEnum.AUTHORIZE, User>,
    getUserData: (userData: User) => baseActionTypeWithPayload<actionTypesEnum.GET_USER_DATA, User>,
    changeUserName: (newName: string) => baseActionTypeWithPayload<actionTypesEnum.CHANGE_USER_NAME, string>,
    changePassword: (newPassword: string) => baseActionTypeWithPayload<actionTypesEnum.CHANGE_PASSWORD, string>,
    resetPassword: (email: string) => baseActionTypeWithPayload<actionTypesEnum.RESET_PASSWORD, string>,
};

export const userSessionActions: IUserSessionActions = {
    signIn: (userData: UserCredential) => ({
        type: actionTypesEnum.SIGN_IN,
        payload: userData,
    }),
    signOut: () => ({
        type: actionTypesEnum.SIGN_OUT,
    }),
    authorize: (userData: User) => ({
        type: actionTypesEnum.AUTHORIZE,
        payload: userData,
    }),
    getUserData: (userData: User) => ({
        type: actionTypesEnum.GET_USER_DATA,
        payload: userData,
    }),
    changeUserName: (newName: string) => ({
        type: actionTypesEnum.CHANGE_USER_NAME,
        payload: newName,
    }),
    changePassword: (newPassword: string) => ({
        type: actionTypesEnum.CHANGE_PASSWORD,
        payload: newPassword,
    }),
    resetPassword: (email: string) => ({
        type: actionTypesEnum.RESET_PASSWORD,
        payload: email,
    }),
};