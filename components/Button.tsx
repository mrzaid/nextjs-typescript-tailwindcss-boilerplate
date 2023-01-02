import React from "react";

interface Props {
  //   border: string;
  //   color: string;
  children?: React.ReactNode; //html pass hogi
  //   height: string;
  onClick: () => void;
  //   radius: string;
  //   width: string;
}
//component ki type laga rahay hou tou react.fc lagayengay
const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className="bg-orangee w-40 rounded h-8" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
