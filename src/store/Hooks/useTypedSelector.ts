import { TypedUseSelectorHook } from 'react-redux';
import { RootStateType } from '..';
import { useSelector } from "react-redux/es/hooks/useSelector";

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;