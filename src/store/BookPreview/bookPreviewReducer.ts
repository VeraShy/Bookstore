import { baseActionType, baseActionTypeWithPayload, IBookInfo } from "../types";
import { actionTypesEnum } from "./bookPreviewActions";

type defaultStateType = {
    openedPopup: boolean,
    popupInfo: null,
};

const defaultState: defaultStateType = {
    openedPopup: false,
    popupInfo: null,
};

export const bookPreviewReducer = (
    state = defaultState,
    action: baseActionType<actionTypesEnum> | baseActionTypeWithPayload <actionTypesEnum, IBookInfo>
) => {
    switch(action.type) {
        case actionTypesEnum.OPEN_POPUP:
            return {...state, openedPopup: true};
        case actionTypesEnum.CLOSE_POPUP: 
            return {...state, openedPopup: false};
        case actionTypesEnum.GET_INFO:
            //@ts-ignore
            return {...state, popupInfo: action.payload}
        default:
            return state;       
    }
};