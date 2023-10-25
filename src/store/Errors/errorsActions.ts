import { baseActionType, baseActionTypeWithPayload } from "../types";

export enum actionTypesEnum {
    SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE',
    CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE',
};

interface IErrorsActions {
    showErrorMessage: (error: string) => baseActionTypeWithPayload<actionTypesEnum.SHOW_ERROR_MESSAGE, string>,
    clearErrorMessage: () => baseActionType<actionTypesEnum.CLEAR_ERROR_MESSAGE>,
};

export const errorsActions: IErrorsActions = {
    showErrorMessage: (error: string) => ({
        type: actionTypesEnum.SHOW_ERROR_MESSAGE,
        error: true,
        payload: error,
    }),
    clearErrorMessage: () => ({
        type: actionTypesEnum.CLEAR_ERROR_MESSAGE,
        error: false,
    }),
};