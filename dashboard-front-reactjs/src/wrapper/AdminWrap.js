import React, { useEffect, useState } from "react";

import { useStateContext } from "../context/ContextProvider";

import { AnimatePresence } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { Tooltip } from "../components";
import { OutsideAlerter } from "../components";

import { Sidebar, NavBar, Settings, Footer } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const { activeMenu, themeSettings, setThemeSettings, currentColor } =
      useStateContext();

    const [checked, setChecked] = useState(
      localStorage.getItem("theme") === "light" ? true : false
    );

    useEffect(() => {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
    }, []);

    const toggleThemeChange = () => {
      if (checked === false) {
        localStorage.setItem("theme", "light");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
        setChecked(true);
      } else {
        localStorage.setItem("theme", "dark");
        document
          .getElementsByTagName("HTML")[0]
          .setAttribute("data-theme", localStorage.getItem("theme"));
        setChecked(false);
      }
    };

    return (
      <div className="admin">
        <>
          {/* Settings Btn */}
          <div className="settings" style={{ zIndex: "1000" }}>
            <Tooltip content="Settings" position="top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="settingsBtn"
                style={{ background: currentColor }}
              >
                <FiSettings />
              </button>
            </Tooltip>
          </div>

          {/* SideBar */}

          {activeMenu ? (
            <div className="active_sidebar">
              <OutsideAlerter>
                <Sidebar />
              </OutsideAlerter>
            </div>
          ) : (
            <div className="hidden_sidebar">
              <Sidebar />
            </div>
          )}

          <div className={activeMenu ? "main_active" : "main_hidden"}>
            {/* NavBar */}

            <div className="nav_container">
              <NavBar />
            </div>

            {/* Settings Panel */}
            <AnimatePresence initial={false}>
              {themeSettings && (
                <OutsideAlerter>
                  <Settings toggle={toggleThemeChange} check={checked} />
                </OutsideAlerter>
              )}
            </AnimatePresence>

            {/* Component */}
            <div id={idName} className={` ${classNames}`}>
              <Component />
            </div>

            <Footer />
          </div>
        </>
      </div>
    );
  };

export default AppWrap;
