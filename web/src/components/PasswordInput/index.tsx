import React, { useState, InputHTMLAttributes } from 'react';

import eyeIcon from '../../assets/images/icons/eye.svg';
import redEyeIcon from '../../assets/images/icons/redEye.svg';

import './styles.css';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

const PasswordInput: React.FC<PasswordInputProps> = ({...rest}) => {
    const [passwordVisible, setPasswordVisible] = useState("password");
    const [passwordIconUse, setPasswordIconUse] = useState(eyeIcon);

    const [password, setPassword] = useState("");

    function isPasswordVisible() {
        if (passwordVisible === "text") {
            setPasswordVisible("password")
            setPasswordIconUse(eyeIcon);
        } else {
            setPasswordVisible("text");
            setPasswordIconUse(redEyeIcon);
        }
    }

    return (
        <div className="passwordContainer">
            <input
                type={passwordVisible}
                name="password"
                className="passwordInput"
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
                value={password}
                {...rest}
            />

            <button onClick={isPasswordVisible} type="button">
                <img src={passwordIconUse} alt="" />
            </button>
        </div>
    )
}

export default PasswordInput;