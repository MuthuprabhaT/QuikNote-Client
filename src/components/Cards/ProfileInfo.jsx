import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout, userInfo }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials(userInfo?.username)}
      </div>

      <div>
        <p className="text-sm text-white font-medium">{userInfo?.username}</p>
      </div>

      <button
        className="bg-red-900 text-white p-1 rounded-md hover:opacity-80"
        onClick={onLogout}
      >
        <IoMdLogOut className="text-3xl" />
      </button>
    </div>
  );
};

export default ProfileInfo;
