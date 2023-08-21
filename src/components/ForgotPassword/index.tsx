import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './styles.css';
import { postForgotPassword } from '../../pages/services';

const ForgotPasswordForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [sendpassword, setSendpassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });



    const ForgotPassword = (userData: { email: string }) => {
        setLoading(true);
        postForgotPassword(userData)
            .then((res) => {
                console.log("Resposta da requisição:", res);
                setSendpassword(true);
            })
            .catch((error) => {
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
            };

            ForgotPassword(userData);
        }
    };

    const handleCloseModal = () => {
        setSendpassword(false)
        setFormData({
            email: '',
        });
    }

    return (
        <div className="container">
            <h1>Recuperar Senha</h1>
            <span className="login-subtitle">
                Informe seu email para enviarmos o procedimento de recuperação de senha
            </span>
            <div className="form-login">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" className="custom-input" required
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <button className="custom-buttom" type="submit" disabled={loading}>
                        {loading ? <span role="status">Enviando...</span> : 'Enviar'}
                    </button>
                    <div className="actions">
                        <Link to="/login">Voltar para o Login</Link>
                        <p>
                            Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                        </p>
                    </div>
                </form>
            </div>
            <Modal show={sendpassword} centered onHide={() => setSendpassword(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Email enviado!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Foi enviado ao seu email, o procedimento de recuperação de senha.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};

export default ForgotPasswordForm;
