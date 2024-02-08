import React from "react";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ setIsSideBarOpen, mobile = true }) => {
  return (
    <div className="rounded-tr-[25px] w-[20vw] max-w-[250px] rounded-br-[25px] h-[100vh] bg-white z-11">
      <div className="flex items-center justify-between py-[15px] px-[30px]">
        <div className="flex items-center">
          <img
            src="/icons/app-logo-blue.png"
            alt="App Logo"
            className="h-[40px] w-[40px] mr-[15px] "
          />
          <p className="font-nunito">Base</p>
        </div>
        {mobile && (
          <img
            src="/icons/close-icon.png"
            alt="Close Icon"
            className="h-[20px] pr-[10px] lg:hidden"
            onClick={() => {
              setIsSideBarOpen((prev) => {
                return !prev;
              });
            }}
          />
        )}
      </div>

      <div className="flex items-center py-[20px] pl-[45px]">
        <img
          src="/icons/dashboard-icon.png"
          alt="Dashboard Icon"
          className="h-[25px] w-[25px] mr-[15px] "
        />
        <p className="font-nunito text-[18px] text-[#9A9AA9]">Dashboard</p>
      </div>
      <div className="flex items-center py-[20px] pl-[45px]">
        <img
          src="/icons/upload-icon.png"
          alt="Upload Icon"
          className="h-[25px] w-[25px] mr-[15px]"
        />
        <p className="font-nunito text-[18px] text-[#9A9AA9]">Upload</p>
      </div>
      <div className="flex items-center py-[20px] pl-[45px]">
        <img
          src="/icons/invoice-icon.png"
          alt="Invoice Icon"
          className="h-[25px] w-[25px] mr-[15px]"
          style={{
            filter:
              "invert(69%) sepia(17%) saturate(203%) hue-rotate(201deg) brightness(88%) contrast(83%)",
          }}
        />
        <p className="font-nunito text-[18px] text-[#9A9AA9]">Invoice</p>
      </div>
      <div className="flex items-center py-[20px] pl-[45px]">
        <img
          src="/icons/schedule-icon.png"
          alt="Invoice Icon"
          className="h-[25px] w-[25px] mr-[15px]"
          style={{
            filter:
              "invert(69%) sepia(17%) saturate(203%) hue-rotate(201deg) brightness(88%) contrast(83%)",
          }}
        />
        <p className="font-nunito text-[18px] text-[#9A9AA9]">Schedule</p>
      </div>
      <div className="flex items-center py-[20px] pl-[45px]">
        <img
          src="/icons/calendar-icon.png"
          alt="Calendar Icon"
          className="h-[25px] w-[25px] mr-[15px] "
          style={{
            filter:
              "invert(69%) sepia(17%) saturate(203%) hue-rotate(201deg) brightness(88%) contrast(83%)",
          }}
        />
        <p className="font-nunito text-[18px] text-[#9A9AA9]">Calendar</p>
      </div>
      <div className="flex items-center py-[20px] pl-[45px]">
        <img
          src="/icons/notification-icon.png"
          alt="Notification Icon"
          className="h-[25px] w-[25px] mr-[15px] "
          style={{
            filter:
              "invert(69%) sepia(17%) saturate(203%) hue-rotate(201deg) brightness(88%) contrast(83%)",
          }}
        />
        <p className="font-nunito text-[18px] text-[#9A9AA9]">Notification</p>
      </div>
      <div className="flex items-center py-[20px] pl-[45px]">
        <img
          src="/icons/setting-icon.png"
          alt="Settings Icon"
          className="h-[25px] w-[25px] mr-[15px] "
          style={{
            filter:
              "invert(69%) sepia(17%) saturate(203%) hue-rotate(201deg) brightness(88%) contrast(83%)",
          }}
        />
        <p className="font-nunito text-[18px] text-[#9A9AA9]">Settings</p>
      </div>
    </div>
  );
};

export default Sidebar;
