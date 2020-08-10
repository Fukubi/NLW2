import React, { InputHTMLAttributes } from 'react';

interface StyleInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string,
    text: string,
}

const StyleInput: React.FC<StyleInputProps> = ({type, text, ...rest}) => {
    return (
        <div className="inputContainer">
            <input type={type} placeholder={text} {...rest}/> <br />
        </div>
    )
}

export default StyleInput;