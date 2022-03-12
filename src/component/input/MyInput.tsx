import React, { FC, InputHTMLAttributes } from 'react';
import './myInput.scss';

interface IInput extends InputHTMLAttributes<HTMLInputElement> { }

const MyInput: FC<IInput> = ({ placeholder, ...props }) => {
    return (
        <input placeholder={placeholder} {...props}/>
    )
}

export default MyInput;