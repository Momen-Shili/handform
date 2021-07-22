import React from "react";

export const Footer = ({ isSignUp }) => {
  return (
    <button className="w-full mb-3 py-2 rounded shadow-red bg-red-400 hover:bg-red-500 text-white text-center focus:outline-none outline-none tracking-widest duration-200">
      {isSignUp ? "REGISTER" : "LOGIN"}
    </button>
  );
};
