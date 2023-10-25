import { Dispatch } from "@reduxjs/toolkit";
import { UserDataType } from "../types";
import { userSessionActions } from "./userSessionActions";
import { updateProfile, User, updatePassword , reauthenticateWithCredential, EmailAuthProvider , sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { errorsActions } from "../Errors/errorsActions";

const handleChangeUserName = async (newName: string) => {
    const user: User | null = auth.currentUser;
    if(!user) return;
    
    return await updateProfile(user, {displayName: newName});
};

export const changeUserName = (newName: string) => {
    return (dispatch: Dispatch) => {
        handleChangeUserName(newName).then((data:any) => {
            dispatch(errorsActions.clearErrorMessage());
            dispatch(userSessionActions.changeUserName(data));
        }).catch((error) => {
            dispatch(errorsActions.showErrorMessage(error.message));
            console.log(error);
        });
    };
};

const validateAndChangePassword = async (currentPassword: string, newPassword: string) => {
    const user: User | null = auth.currentUser;
    if(!user) return;

    if(user.email) {
        const userCredentials = EmailAuthProvider.credential(user!.email, currentPassword);
        const authResult = await reauthenticateWithCredential(user!, userCredentials);
        return await updatePassword(user!, newPassword);
    };
};

export const changePassword = (currentPassword: string, newPassword: string) => {
    return async (dispatch: Dispatch) => {
        validateAndChangePassword(currentPassword, newPassword).then((data:any) => {
            dispatch(errorsActions.clearErrorMessage());
            dispatch(userSessionActions.changePassword(data));
        }).catch((error) => {
            dispatch(errorsActions.showErrorMessage(error.message));
            console.log(error);
        }); 
    };
};

const sendResetEmail = async (email: string) => {
    return await sendPasswordResetEmail(auth, email);
};

export const resetPassword = (email: string) => {
    return (dispatch: Dispatch) => {
        sendResetEmail(email).then((data: any) => {
            dispatch(userSessionActions.resetPassword(data));
            console.log('Password Reset Email Sent!');
        }).catch((error) => {
            dispatch(errorsActions.showErrorMessage(error.message));
            console.log(error);
        }); 
    };
};