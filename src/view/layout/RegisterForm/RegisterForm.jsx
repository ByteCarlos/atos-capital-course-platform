import React, { useState } from "react";
import './style.css';
import './responsiveness.css';

const RegisterForm = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        telephone: '',
        password: ''
    });
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        if(name !== "confirm-password") {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }))
        }else {
            setConfirmPassword(value);
        }
    }

    const onSubmit = () => {
        if(confirmPassword === formData.password) {
            try {
                // @todo implementar algoritmo para chamar 
                // uma instancia Service para a rota da API
            } catch (error) {
                console.log(error);
            }    
        }else {
            console.log("Senhas não coincidem");
        }
    }

    return (
        <div className="register-form-container">
            <form className="register-form" onSubmit={onSubmit} data-form>
                <h4 className="form-title">Cadastro</h4>
                <div className="form-control">
                    <input onChange={handleChange} type="text" className="name-fieldset" name="name" id="name"  placeholder="Nome"/>
                </div>
                <div className="form-control">
                    <input onChange={handleChange} type="text" className="surname-fieldset" name="surname" id="surname" placeholder="Sobrenome" />
                </div>
                <div className="form-control">
                    <input onChange={handleChange} type="text" className="email-fieldset" name="email" id="name" placeholder="Email" />
                </div>
                <div className="form-control">
                    <input onChange={handleChange} type="text" className="telephone-fieldset" name="telephone" id="telephone" placeholder="Telefone" />
                </div>
                <div className="form-control">
                    <input onChange={handleChange} type="password" className="password-fieldset" name="password" id="password" placeholder="Senha" />
                </div>
                <div className="form-control">
                    <input onChange={handleChange} type="password" className="confirm-password-fieldset" name="confirm-password" id="confirm-password" placeholder="Confirmar Senha" />
                </div>
                <div className="button-submit-container">
                    <button className="button-submit" data-button-submit>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;