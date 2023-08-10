import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { postSaveUsers } from '../../pages/services';

import './styles.css';
import { Button } from 'react-bootstrap/lib/InputGroup';

const CreateForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const saveUsers = (userData: { name: string, email: string, password: string }) => {
        postSaveUsers(userData)
            .then((res) => {
                // Processar a resposta aqui, se necessário
                console.log("Resposta da requisição:", res);
            })
            .catch((error) => {
                // Lidar com erros, se necessário
                console.error("Erro na requisição:", error);
            });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const userData = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            };

            saveUsers(userData);
        }
    };
    

    return(
        <div className="container">
            <h1>Cadastro de Usuário</h1>
            <span className="login-subtitle">Preencha seus dados</span>
            <div className="form-login">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input type="text" name="name" className="custom-input" required/>

                    <label>Email</label>
                    <input type="email" name="email" className="custom-input" required/>

                    <label>Senha</label>
                    <input type="password" name="password" className="custom-input" required />

                    <label>Confirme sua senha</label>
                    <input type="password" name="confirmPassword" className="custom-input" required />

                    <button className="custom-buttom" type="submit">
                        Cadastrar
                    </button>

                    <div className="actions">
                        <Link to="/login">Já tenho uma conta</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateForm;