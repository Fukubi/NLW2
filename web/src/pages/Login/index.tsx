import React, { useState, FormEvent } from 'react';

import splashImg from '../../assets/images/background.svg';
import logoImg from '../../assets/images/logo.svg';

import eyeIcon from '../../assets/images/icons/eye.svg';
import redEyeIcon from '../../assets/images/icons/redEye.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';
import StyleInput from '../../components/StyleInput';
import PasswordInput from '../../components/PasswordInput';

function Login() {
    const history = useHistory()

    const [passwordVisible, setPasswordVisible] = useState("password");
    const [buttonStyle, setButtonStyle] = useState("submitButton");
    const [passwordIconUse, setPasswordIconUse] = useState(eyeIcon);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [isSave, setIsSave] = useState(false);
    
    function isPasswordVisible() {
        if (passwordVisible === "text") {
            setPasswordVisible("password")
            setPasswordIconUse(eyeIcon);
        } else {
            setPasswordVisible("text");
            setPasswordIconUse(redEyeIcon);
        }
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        api.get(`/login?email=${email}&password=${password}`, {
        }).then(res => {
            if(res.data) {
                localStorage.setItem('jwkKey', res.data)
                history.push('/');
            } else {
                alert('Usuário não encontrado');
            }
            
        }).catch(() => {
            alert("Erro no cadastro!")
        });
    }

    function handleSubmitButton() {
        if (buttonStyle === "submitButton") {
            setButtonStyle("clickSubmitButton");
        } else {
            setButtonStyle("submitButton");
        }
        
    }

    return (
        <div id="container">
            <div className="splash">
                <img src={splashImg} className="backgroundeffect" alt="background-effects" />
                <div className="logo">
                    <img src={logoImg} alt="proffy-logo" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
            </div>

            <div className="login">
                <h1>Fazer login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="formInputs">
                        <div className="emailContainer">
                        <StyleInput 
                            type="email" 
                            text="E-mail"
                            className="emailInput"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        </div>

                        <PasswordInput value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <div className="passrem">
                        <label className="checkboxContainer">Lembrar-se
                            <input type="checkbox" checked={isSave} onClick={() => setIsSave(!isSave)}/>
                            <span className="checkmark"></span>
                        </label>

                        <a href="">
                            Esqueci minha senha
                        </a>
                    </div>

                    <button type="submit" onClick={handleSubmitButton} className={buttonStyle}>Entrar</button>
                </form>

                <div className="footer">
                    <p className="register">
                    Não tem conta? <br />
                    <Link to="/register">Cadastre-se</Link>
                    </p>

                    <p>É de graça <img src={purpleHeartIcon} alt=""/></p>
                </div>
            </div>
        </div>
    )
}

export default Login;