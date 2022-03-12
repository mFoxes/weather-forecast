import React, { ButtonHTMLAttributes, FC } from 'react';
import './myButton.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MyButton: FC<IButton> = ({children, ...props}) => {
  return (
    <button {...props}>
        {children}
    </button>
  )
}

export default MyButton;