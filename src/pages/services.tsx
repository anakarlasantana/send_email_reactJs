import api from "../services/api";
import { ForgotPasswordProps, LoginProps, SaveUserProps } from "./types";


export const postSaveUsers = async (userData: SaveUserProps) => {
    return api
        .post('/users', userData)
        .then((res) => res.data);
};


export const postLogin = async (userData: LoginProps) => {
    return api
        .post('/login', userData)
        .then((res) => res.data);
};


export const postForgotPassword = async (userData: ForgotPasswordProps) => {
    return api
        .post('/forgot_password', userData)
        .then((res) => res.data);
};

