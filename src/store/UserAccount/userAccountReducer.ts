import { baseActionType, baseActionTypeWithPayload } from "../types";
import { actionTypesEnum } from "./userAccountActions";

type defaultStateType = {
    isNameChangeSuccess: boolean,
    newName: string | null,
    isPasswordChangeSuccess: boolean,
    newPassword: string | null,
    passwordChangeError: string | null,
    isResetEmailSent: boolean,
    resetPasswordEmail: string | null,
};

const defaultState: defaultStateType = {
    isNameChangeSuccess: false,
    newName: null,
    isPasswordChangeSuccess: false,
    newPassword: null,
    passwordChangeError: null,
    isResetEmailSent: false,
    resetPasswordEmail: null,
};

export const userAccountReducer = (
    state = defaultState,
    action: 
        baseActionTypeWithPayload<actionTypesEnum.CHANGE_USER_NAME, string> |
        baseActionTypeWithPayload<actionTypesEnum.CHANGE_PASSWORD_SUCCESS, string> |
        baseActionTypeWithPayload<actionTypesEnum.CHANGE_PASSWORD_FAIL, string> |
        baseActionTypeWithPayload<actionTypesEnum.RESET_PASSWORD, string> |
        baseActionType<actionTypesEnum.RESET_ACCOUNT_STATUS>
): defaultStateType => {
    switch(action.type) {
        case actionTypesEnum.CHANGE_USER_NAME:
            return {...state, isNameChangeSuccess: true, newName: action.payload, passwordChangeError: null};
        case actionTypesEnum.CHANGE_PASSWORD_SUCCESS:
            return {...state, isPasswordChangeSuccess: true, newPassword: action.payload, passwordChangeError: null};
        case actionTypesEnum.CHANGE_PASSWORD_FAIL:
            return {...state, isPasswordChangeSuccess: false, passwordChangeError: action.payload};
        case actionTypesEnum.RESET_PASSWORD:
            return {...state, isResetEmailSent: true, resetPasswordEmail: action.payload};
        case actionTypesEnum.RESET_ACCOUNT_STATUS:
            return {...state, isResetEmailSent: false, isPasswordChangeSuccess: false, isNameChangeSuccess: false};
        default:
            return state;
    };
};