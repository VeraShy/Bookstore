import React, { FC, PropsWithChildren } from 'react';
import { useTypedSelector } from '../../store/Hooks/useTypedSelector';
import { Navigate } from 'react-router-dom';

interface IRouteProps {
    children: JSX.Element | any,
};

const PrivateRoute: FC<IRouteProps> = ({children}) => {
    const { isSignedIn } = useTypedSelector(state => state.session);

    return isSignedIn ? children : <Navigate to='/sign-up'></Navigate>
};

export default PrivateRoute;