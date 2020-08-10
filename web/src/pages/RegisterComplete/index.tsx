import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import backgroundImg from '../../assets/images/success-background.svg';
import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';


function RegisterComplete() {
    return (
        <div id="register-complete-container">
            

            <div className="components">
                <img src={successIcon} alt=""/>
                <h1>Cadastro concluído</h1>
                <p>Agora você faz parte da plataforma da Proffy. < br/> Tenha uma ótima experiência.</p>

                <Link to="/login" className=".button">
                    <button>Fazer login</button>
                </Link>
                
            </div>
        </div>
    )
}

export default RegisterComplete;