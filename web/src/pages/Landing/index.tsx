import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landigImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css'


function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    const [key, setKey] = useState("");

    useEffect(() => {
        api.get('connections').then(response => {
            console.log(response);
            const { total } = response.data;
            setTotalConnections(total);
        })

        const k = localStorage.getItem('jwkKey');

        if (k){
            setKey(k)
        }
    }, [])

    if (key) {
        return (
            <div id="page-landing">
                <div id="page-landing-content" className="container">
                    <div className="logo-container">
                        <img src={logoImg} alt="Proffy" />
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>
    
                    <img
                        src={landigImg}
                        alt="Plataforma de estudos"
                        className="hero-image"
                    />
    
                    <div className="buttons-container">
                        <Link to="/study" className="study">
                            <img src={studyIcon} alt="Estudar" />
                            Estudar
                        </Link>
    
                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassIcon} alt="Dar aulas" />
                            Dar aulas
                        </Link>
                    </div>
    
                    <span className="total-connections">
                        total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div id="page-landing-login">
                <div className="login">
                    <h1>Login ainda não foi efetuado, realize o login por este link: </h1>
                    <Link to="/login" className="loginLink">
                        Página de login
                    </Link>
                </div>
            </div>
        )
    }

    
}

export default Landing;