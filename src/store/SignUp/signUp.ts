import { Dispatch } from "@reduxjs/toolkit";
import { UserDataType } from "../types";
import { signUpActions } from "./signUpActions";
import { auth, createUserWithEmailAndPassword } from "../../firebaseConfig";
import { updateProfile } from "firebase/auth";
import { UserCredential } from "firebase/auth";

const handleSignUp = async (userData: UserDataType) => {
    const { displayName , email , password } = userData;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if(userCredential && auth.currentUser) {
        updateProfile(auth.currentUser, {displayName: displayName})
    };
    
    return userCredential;
};

export const userSignUp = (userData: UserDataType) => {
    return (dispatch: Dispatch) => {
        handleSignUp(userData)
        .then((data: UserCredential) => {
            if(data.user.uid) {
                dispatch(signUpActions.signUpSuccess(data));
            };  
        })
        .catch ((error: any) => {
            dispatch(signUpActions.signUpFail(error.message));
            console.log(error);
        })
    };
};


