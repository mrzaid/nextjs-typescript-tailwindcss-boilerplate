import React, { FC } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  id: string;
  className:string
}

const Input: FC<InputProps> = ({ placeholder, type = "text", id,className }) => {
  return (
    <input className={className} placeholder={placeholder} type={type} id={id} />
  );
};

export default Input;
