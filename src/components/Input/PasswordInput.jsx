import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const PasswordInput = ({ value, onChange }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        type={isShowPassword ? "text" : "password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
        value={value}
        onChange={onChange}
        placeholder={"Password"}
      />

      {isShowPassword ? (
        <IoEye
          size={22}
          className="text-[#2B85FF] cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <IoEyeOff
          size={22}
          className="text-slate-400 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
