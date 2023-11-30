import { Dispatch } from "@reduxjs/toolkit";
import { UserDataType } from "../types";
import { signInActions } from "../SignIn/signInActions";
import { auth , signInWithEmailAndPassword , signOut } from "../../firebaseConfig";
import { onAuthStateChanged, setPersistence , UserCredential , browserSessionPersistence } from "firebase/auth";

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
                    dispatch(signInActions.signInSuccess(data));
                };  
            }).catch ((error) => {
                dispatch(signInActions.signInFail(error.message));
                console.log(error);
            });
        });
    };
};

export const authorizeUser = () => {
    return async (dispatch:Dispatch) => {
        await onAuthStateChanged(auth, (user) => {
            if(user?.uid) {
                dispatch(signInActions.authorize(user!)); 
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
            dispatch(signInActions.signOut());
        });
    };
};