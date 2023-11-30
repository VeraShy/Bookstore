import { Dispatch } from "@reduxjs/toolkit";
import { userAccountActions } from "./userAccountActions";
import { updateProfile, User, updatePassword , reauthenticateWithCredential, EmailAuthProvider , sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const handleChangeUserName = async (newName: string) => {
    const user: User | null = auth.currentUser;
    if(!user) return;
    
    return await updateProfile(user, {displayName: newName});
};

export const changeUserName = (newName: string) => {
    return (dispatch: Dispatch) => {
        handleChangeUserName(newName).then((data:any) => {
            dispatch(userAccountActions.changeUserName(data));
        }).catch((error) => {
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
            dispatch(userAccountActions.changePasswordSuccess(data));
        }).catch((error) => {
            dispatch(userAccountActions.changePasswordFail(error.message));
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
            dispatch(userAccountActions.resetPassword(data));
            console.log('Password Reset Email Sent!');
        }).catch((error) => {
            console.log(error);
        }); 
    };
};