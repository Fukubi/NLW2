import React, { useState, FormEvent } from 'react';

import Splash from '../../components/Splash';
import StyleInput from '../../components/StyleInput';

import backIcon from '../../assets/images/icons/strong-back.svg';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';

function PasswordRecuperation() {
    const [buttonStyle, setButtonStyle] = useState("submitButton");
    const [email, setEmail] = useState("");

    const history = useHistory();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        
    }

    function handleSubmitButton() {
        if (buttonStyle === "submitButton") {
            setButtonStyle("clickSubmitButton");
        } else {
            setButtonStyle("submitButton");
        }
        
    }

    return (
        <div id="recuperation-page">
            <div id="password-recuperation-container">
                <Link to="/login" className="backicon">
                    <img src={backIcon} alt="back"/>
                </Link>
                <div className="header">
                    <h2>Eita, esqueceu <br /> sua senha?</h2>
                    <p> Não esquenta, vamos dar um jeito nisso.</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <StyleInput type="email" text="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <button type="submit" onClick={handleSubmitButton} className={buttonStyle}>Entrar</button>
                </form>
            </div>

            <Splash text="Sua plataforma de estudos online" />
        </div>
    )
}

export default PasswordRecuperation;