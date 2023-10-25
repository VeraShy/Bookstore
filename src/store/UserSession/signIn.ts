import { Dispatch } from "@reduxjs/toolkit";
import { UserDataType } from "../types";
import { userSessionActions } from "./userSessionActions";
import { auth , signInWithEmailAndPassword , signOut } from "../../firebaseConfig";
import { onAuthStateChanged, setPersistence , sendPasswordResetEmail , User, UserCredential , 
    updateProfile , updatePassword , reauthenticateWithCredential, AuthCredential, browserLocalPersistence , browserSessionPersistence } from "firebase/auth";
import { errorsActions } from "../Errors/errorsActions";

const handleSetPersistance = async () => {
    return await setPersistence(auth, browserSessionPersistence);
};

const handleSignIn = async (userData: UserDataType) => {
    const { email , password } = userData;
    const signedInUser = await signInWithEmailAndPassword(auth, email, password);
    console.log(signedInUser);

    return signedInUser;
};

export const userSignIn = (userData: UserDataType) => {
    return (dispatch: Dispatch) => {
        handleSetPersistance().then(() => {
            handleSignIn(userData).then(( data: UserCredential ) => {
                if(data.user.uid) {
                    dispatch(errorsActions.clearErrorMessage());
                    dispatch(userSessionActions.signIn(data));
                };  
            }).catch ((error) => {
                dispatch(errorsActions.showErrorMessage(error.message));
                console.log(error);
            });
        });
    };
};

export const authorizeUser = () => {
    return async (dispatch:Dispatch) => {
        await onAuthStateChanged(auth, (user) => {
            if(user?.uid) {
                dispatch(userSessionActions.authorize(user!));
                dispatch(userSessionActions.getUserData(user!));    
                dispatch(errorsActions.clearErrorMessage());
            };
        });
    };
};

const handleSignOut = async () => {
    return await signOut(auth);
};

export const userSignOut = () => {
    return(dispatch: Dispatch) => {
        handleSignOut().then(() => {
            dispatch(userSessionActions.signOut());
            dispatch(errorsActions.clearErrorMessage());
        });
    };
};