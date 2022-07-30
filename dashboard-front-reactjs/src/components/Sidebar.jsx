import React from "react";

import { useStateContext } from "../context/ContextProvider";

import { Link, NavLink } from "react-router-dom";

import { FaReact, MdOutlineCancel } from ".";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 1120) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="sidebar_container">
      {activeMenu && (
        <>
          <div className="sidebar_head">
            <Link
              to="/main"
              onClick={handleCloseSideBar}
              className="sidebar_logo"
            >
              <FaReact /> <span>React Dashboard</span>
            </Link>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                className="sidebar_cancelBtn"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className="sidebar_links">
            {links.map((item) => (
              <div key={item.title}>
                <p className="links">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "normalLink"
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
