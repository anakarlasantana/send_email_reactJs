import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles.css';
import { postLogin } from '../../pages/services';

const LoginForm: React.FC = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const Login = (userData: { email: string, password: string }) => {
        setLoading(true)
        postLogin(userData)
            .then((res) => {
                // Processar a resposta aqui, se necessário
                console.log("Resposta da requisição:", res);
                localStorage.setItem("app_user", res.name);
                navigate('/inicio')
               
            })
            .catch((error) => {
                // Lidar com erros, se necessário
                console.error("Erro na requisição:", error);
            })
            .finally(() => {
                setLoading(false); 
            });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const userData = {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
            };

            Login(userData);
        }
    };
    

    return(
        <div className="container">
            <h1>Login</h1>
            <span className="login-subtitle">Informe suas credenciais</span>
            <div className="form-login">
            <form ref={formRef} onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name='email' className="custom-input" required/>   

                    <label>Senha</label>
                    <input type="password" name='password' className="custom-input" required />

                    <button className="custom-buttom" type="submit" disabled={loading}>
                        {loading ? <span role="status">Entrando...</span> : 'Entrar'}
                    </button>
                    <div className="actions">
                        <p><a href="/esqueci-senha" >Esqueci minha senha</a></p>
                        <p>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;