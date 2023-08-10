import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const LoginForm: React.FC = () => {
    return(
        <div className="container">
            <h1>Login</h1>
            <span className="login-subtitle">Informe suas credenciais</span>
            <div className="form-login">
                <form>
                    <label>Email</label>
                    <input type="email" className="custom-input" required/>   

                    <label>Senha</label>
                    <input type="password" className="custom-input" required />

                    <button className="custom-buttom" type="submit">
                        Entrar
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