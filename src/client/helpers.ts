import { Ref } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";

export const nameValidator = (displayName: string) => {
    if (!displayName) {
        return "Please enter your name";
    };
    
    return "";
};

export const emailValidator = (email: string) => {
    if (!email) {
        return "Please enter your email adress";
    } 
    else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return "Incorrect email format";
    };
    
    return "";
};

export const passwordValidator = (password: string) => {
    if (!password) {
        return "Password is required";
    } 
    else if (password.length < 6) {
        return "Password should contain at least 6 characters";
    };
    
    return "";
};
