import api from "../services/api";
import { LoginProps } from "./types";


export const postSaveUsers = async (userData: LoginProps) => {
    return api
        .post('/users', userData)
        .then((res) => res.data);
};


// api.post('/login').then(response => {
//     // Processar a resposta
// }).catch(error => {
//     // Lidar com erros
// });


// api.post('/forgot_password').then(response => {
//     // Processar a resposta
// }).catch(error => {
//     // Lidar com erros
// });