import React, { ButtonHTMLAttributes } from 'react';

const Button = ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button>{children}</button>;
};

export default Button;
