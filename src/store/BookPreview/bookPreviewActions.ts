import { baseActionType, baseActionTypeWithPayload } from "../types";
import { IBookInfo } from "../types";

export enum actionTypesEnum {
    OPEN_POPUP = 'OPEN_POPUP',
    CLOSE_POPUP = 'CLOSE_POPUP',
    GET_INFO = 'GET_INFO',
};

interface IBookPreviewActions {
    openPopup: () => baseActionType<actionTypesEnum.OPEN_POPUP>,
    closePopup: () => baseActionType<actionTypesEnum.CLOSE_POPUP>,
    getPopupInfo: (book: IBookInfo) => baseActionTypeWithPayload<actionTypesEnum.GET_INFO, IBookInfo>,
};

export const bookPreviewActions: IBookPreviewActions = {
    openPopup: () => ({
        type: actionTypesEnum.OPEN_POPUP
    }),
    closePopup: () => ({
        type: actionTypesEnum.CLOSE_POPUP 
    }),
    getPopupInfo: (book: IBookInfo) => ({
        type: actionTypesEnum.GET_INFO,
        payload: book,
    }),
};