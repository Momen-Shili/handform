import React from "react";

export const Body = ({ isSignUp }) => {
  return (
    <div className="text-gray-600 text-sm space-y-4">
      {(!isSignUp ? login : register).map((item, index) => (
        <div key={index} className="flex flex-col space-y-1">
          <label htmlFor={`modal-${item.id}`} className="font-semibold">
            {item.label}
          </label>
          <input
            id={`modal-${item.id}`}
            name={`modal-${item.id}`}
            type={item.type}
            className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:shadow-red rounded-md duration-300 text-sm"
          />
        </div>
      ))}
      {!isSignUp && (
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <input
              id="modal-remember"
              name="modal-remember"
              type="checkbox"
              className="border-gray-300 border"
            />
            <label htmlFor="modal-remember">Ingat saya</label>
          </div>
          <button className="text-red-400 hover:text-red-500">
            Lupa password?
          </button>
        </div>
      )}
    </div>
  );
};

const login = [
  {
    label: "Alamat email",
    id: "email",
    type: "text",
  },
  {
    label: "Password",
    id: "password",
    type: "password",
  },
];
const register = [
  {
    label: "Nama lengkap",
    id: "name",
    type: "text",
  },
  {
    label: "Alamat email",
    id: "email",
    type: "text",
  },
  {
    label: "Password",
    id: "password",
    type: "password",
  },
  {
    label: "Ulangi password",
    id: "re-password",
    type: "password",
  },
];
