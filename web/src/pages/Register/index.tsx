import React, { useState, FormEvent } from 'react';

import Splash from '../../components/Splash';
import StyleInput from '../../components/StyleInput';
import PasswordInput from '../../components/PasswordInput';

import backIcon from '../../assets/images/icons/strong-back.svg';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function Register() {
    const [buttonStyle, setButtonStyle] = useState("submitButton");

    const [name, setName] = useState("");
    const [secondname, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        api.post('/register', {
            name,
            secondname,
            email,
            password
        }).then((response) => {
            history.push('/RegisterComplete');
        }).catch((err) => {
            alert('Algum erro aconteceu, tente novamente')
        })
    }

    function handleSubmitButton() {
        if (buttonStyle === "submitButton") {
            setButtonStyle("clickSubmitButton");
        } else {
            setButtonStyle("submitButton");
        }
        
    }

    return (
        <div id="register-page">
            <div id="register-container">
                <Link to="/login" className="backicon">
                    <img src={backIcon} alt="back"/>
                </Link>
                <div className="header">
                    <h2>Cadastro</h2>
                    <p>Preencha os dados abaixo < br/> para começar.</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <StyleInput type="text" text="Nome" value={name} onChange={e => setName(e.target.value)}/>
                    </div>

                    <div className="second-name">
                        <StyleInput type="text" text="Sobrenome" value={secondname} onChange={e => setSecondName(e.target.value)}/>
                    </div>
                    
                    <div className="email">
                        <StyleInput type="email" text="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    
                    <div className="password">
                        <PasswordInput value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" onClick={handleSubmitButton} className={buttonStyle}>Entrar</button>
                </form>
            </div>

            <Splash text="Sua plataforma de estudos online" />
        </div>
    )
}

export default Register;