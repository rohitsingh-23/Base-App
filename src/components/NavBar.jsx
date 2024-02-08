import React, { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AuthContext } from "../context/authContext";

const NavBar = ({ setIsSideBarOpen }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between px-[20px] py-[20px] bg-white">
      <div className="flex items-center lg:hidden">
        <RxHamburgerMenu
          className="mr-[15px] h-[25px] w-[25px]"
          onClick={() => {
            setIsSideBarOpen(true);
          }}
        />
        <img
          src="/icons/app-logo-blue.png"
          alt="App Logo"
          className="w-[30px] h-[30px] mr-[10px]"
        />
        <p className="font-nunito font-[700]">Base</p>
      </div>
      <p className="hidden lg:block font-[500] text-[20px] ml-[15%]">
        Upload CSV
      </p>
      <div className="flex items-center">
        <IoMdNotificationsOutline className="w-[25px] h-[25px] mr-[10px]" />
        <img
          src={ user.photoURL ? user.photoURL : "/icons/user-icon.png" }
          alt="Profile Image"
          className="w-[30px] h-[30px] rounded-[50%]"
        />
      </div>
    </div>
  );
};

export default NavBar;
