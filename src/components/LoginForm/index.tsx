import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postLogin } from '../../pages/services';
import './loginstyles.css'


const LoginForm: React.FC = () => {

    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [userNotFound, setUserNotFound] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const Login = (userData: { email: string, password: string }) => {
        setLoading(true)
        postLogin(userData)
            .then((res) => {
                console.log("Login efetuado com sucesso!");
                localStorage.setItem("app_user", res.name);
                navigate('/inicio')

            })
            .catch((error) => {
                console.error("Erro na requisição:", error);
                setUserNotFound(true)
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 5000);
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

    useEffect(() => {
        if (showAlert) {
            document.querySelector('.alert')?.classList.add('show');
        } else {
            document.querySelector('.alert')?.classList.remove('show');
        }
    }, [showAlert]);


    return (
        <div className="container">
            <h1>Login</h1>
            <span className="login-subtitle">Informe suas credenciais</span>
            <div className={`alert ${userNotFound ? 'alert-danger' : 'alert-success'}`}>
                {userNotFound
                    ? 'Usuário não encontrado. Por favor, verifique seus dados.'
                    : 'Usuário cadastrado com sucesso!'}
                <span className="close" onClick={() => setShowAlert(false)}>
                    &times;
                </span>
            </div>
            <div className="form-login">
                <form className="form-login" ref={formRef} onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name='email' className="custom-input" required />

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