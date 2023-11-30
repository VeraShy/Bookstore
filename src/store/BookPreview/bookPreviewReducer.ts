import { baseActionType, baseActionTypeWithPayload, IBookInfo } from "../types";
import { actionTypesEnum } from "./bookPreviewActions";

type defaultStateType = {
    openedPopup: boolean,
    popupInfo: IBookInfo | null,
};

const defaultState: defaultStateType = {
    openedPopup: false,
    popupInfo: null,
};

export const bookPreviewReducer = (
    state = defaultState,
    action: baseActionType<actionTypesEnum.OPEN_POPUP> | 
            baseActionType<actionTypesEnum.CLOSE_POPUP> | 
            baseActionTypeWithPayload <actionTypesEnum.GET_INFO, IBookInfo>
): defaultStateType => {
    switch(action.type) {
        case actionTypesEnum.OPEN_POPUP:
            return {...state, openedPopup: true};
        case actionTypesEnum.CLOSE_POPUP: 
            return {...state, openedPopup: false};
        case actionTypesEnum.GET_INFO:
            return {...state, popupInfo: action.payload}
        default:
            return state;       
    }
};