"use client"
import React from "react";

interface ButtonProps {
  label: string;
  onclick?: () => void;
  big? :boolean
}

const Button: React.FC<ButtonProps> = ({ label, onclick,big }) => {
  return (
    <div>
      <button
        className={`border border-cyan-100 rounded-lg  md:px-6 px-14 md:py-4 py-7
         text-cyan-100 hover:bg-cyan-100 hover:text-[#0A192F] hover:border-transparent transition duration-300 ease-in-out`}
        onClick={onclick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
