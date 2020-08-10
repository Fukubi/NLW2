import React, { ImgHTMLAttributes } from 'react';

import splashImg from '../../assets/images/background.svg';
import logoImg from '../../assets/images/logo.svg';

interface SplashProps {
    text: string;
    name?: string;
}

const Splash: React.FC<SplashProps> = ({text, ...rest}) => {
    return (
        <div className="splash">
        <img src={splashImg} className="backgroundeffect" alt="background-effects" />
        <div className="logo">
            <img src={logoImg} alt="proffy-logo" {...rest}/>
            <h2>{text}</h2>
        </div>
    </div>
    )
}

export default Splash;