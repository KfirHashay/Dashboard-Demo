import React, { useEffect } from "react";
import {
  AiOutlineMenu,
  BsChatLeft,
  RiNotification3Line,
  MdKeyboardArrowDown,
} from ".";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../context/ContextProvider";

import { Chat, Notification, UserProfile } from ".";
import avatar from "../data/avatar.jpg";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="navBtn"
    >
      <span style={{ background: dotColor }} className="navBtnSpan" />
      {icon}
    </button>
  </TooltipComponent>
);

const NavBar = () => {
  const {
    currentColor,

    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
    activeMenu,
    setActiveMenu,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 1120) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="navbar">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="navbar_icons">
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="ProfileBtn"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="user-profile" />
            <p>
              <span className="span-1">Hi,</span>
              <span className="span-2">Michael</span>
            </p>
            <MdKeyboardArrowDown className="span-1" />
          </div>
        </TooltipComponent>

        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default NavBar;
