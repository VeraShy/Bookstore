import React, { FC, PropsWithChildren } from 'react';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';
import { Navigate } from 'react-router-dom';

interface IRouteProps {
    children: JSX.Element | any,
};

const PrivateRoute: FC<IRouteProps> = ({children}) => {
    const { isSignedIn } = useTypedSelector(state => state.signIn);

    return isSignedIn ? children : <Navigate to='/registration'></Navigate>
};

export default PrivateRoute;