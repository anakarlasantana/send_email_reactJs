import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { postSaveUsers } from '../../pages/services';
import './styles.css';
import { Modal, Button } from 'react-bootstrap';

const CreateForm: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [userRegistered, setUserRegistered] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const saveUsers = (userData: { name: string, email: string, password: string }) => {
        postSaveUsers(userData)
            .then((res) => {
                console.log("Cadastro efetuado com sucesso!");
                setUserRegistered(true);
            })
            .catch((error) => {
                console.error("Erro na requisição:", error);
            });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (formRef.current) {
            const formDataFromForm = new FormData(formRef.current);
            const userData = {
                name: formDataFromForm.get('name') as string,
                email: formDataFromForm.get('email') as string,
                password: formDataFromForm.get('password') as string,
            };

            saveUsers(userData);
        }
    };

    const handleCloseModal = () => {
        setUserRegistered(false)
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    }

    return (
        <div className="container">
            <h1>Cadastro de Usuário</h1>
            <span className="login-subtitle">Preencha seus dados</span>
            <div className="form-login">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input type="text" name="name" className="custom-input" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                    <label>Email</label>
                    <input type="email" name="email" className="custom-input" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                    <label>Senha</label>
                    <input type="password" name="password" className="custom-input" required value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

                    <label>Confirme sua senha</label>
                    <input type="password" name="confirmPassword" className="custom-input" required value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />

                    <button className="custom-buttom" type="submit">
                        Cadastrar
                    </button>

                    <div className="actions">
                        <Link to="/login">Já tenho uma conta</Link>
                    </div>
                </form>
            </div>
            <Modal show={userRegistered} centered onHide={() => setUserRegistered(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Usuário Cadastrado!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Seu usuário foi cadastrado com sucesso.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreateForm;
