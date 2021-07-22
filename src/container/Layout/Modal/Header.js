import React from "react";
import userIcon from "../../../assets/svg/user.svg";
import editIcon from "../../../assets/svg/edit.svg";

export const Header = ({ isSignUp, setSignUp }) => {
  return (
    <ul className="flex space-x-8 pt-3">
      <li>
        <div
          onClick={() => setSignUp(false)}
          className={`${
            !isSignUp
              ? "text-red-400 border-b border-red-500"
              : "text-gray-600 hover:text-red-300 duration-300"
          } flex items-center space-x-2 font-semibold py-3 cursor-pointer`}
        >
          <img src={userIcon} alt="login" className="h-7 w-7" />
          <p>Sign In</p>
        </div>
      </li>
      <li>
        <div
          onClick={() => setSignUp(true)}
          className={`${
            isSignUp
              ? "text-red-400 border-b border-red-500"
              : "text-gray-600 hover:text-red-300 duration-300"
          } flex items-center space-x-2 font-semibold py-3 cursor-pointer`}
        >
          <img src={editIcon} alt="register" className="h-7 w-7" />
          <p>Sign Up</p>
        </div>
      </li>
    </ul>
  );
};
