import React from "react";
import { MdOutlineCancel, BsCheck } from ".";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { motion } from "framer-motion";

import { useStateContext } from "../context/ContextProvider";
import { themeColors } from "../data/dummy";

const variants = {
  open: { x: "100%", opactity: 0, rotation: 0.02 },
  closed: { x: 0, opactity: 1 },
};

function Settings({ toggle, check }) {
  const { themeSettings, setThemeSettings, currentColor, setColor } =
    useStateContext();

  return (
    <motion.div
      initial="open"
      animate={themeSettings ? "closed" : "open"}
      transition={{
        duration: 0.5,
        rotation: 0.02,
        ease: "easeOut",
        type: "spring",
      }}
      exit={{
        x: "100%",
        opactity: 0,
        transition: { duration: 0.25, ease: "easeIn" },
      }}
      variants={variants}
      className="settings_container nav-item"
    >
      <div className="settings_panel">
        <div className="settings_header">
          <p className="set_text">Settings </p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)" }}
            className="closeSettingsBtn"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="settings_theme">
          <p>Theme Option</p>

          <div className="settings_theme_input_light">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              onChange={toggle}
              checked={check === true}
            />

            <label htmlFor="light">Light</label>
          </div>
          <div className="settings_theme_input_dark">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              onChange={toggle}
              checked={check === false}
            />
            <label htmlFor="dark">Dark</label>
          </div>
        </div>
        <div className="settings_theme_color">
          <p>Language(Coming Soon)</p>
          <div className="settings_theme_input_light">
            <input type="radio" id="heb" name="lan" value="heb" disabled />

            <label htmlFor="heb">Hebrew</label>
          </div>
          <div className="settings_theme_input_dark">
            <input type="radio" id="eng" name="lan" value="eng" disabled />
            <label htmlFor="eng">English</label>
          </div>
        </div>
        <div className="settings_theme_color">
          <p>Theme Colors</p>
          <div className="colors_container">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="colors" key={item.name}>
                  <button
                    type="button"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`check ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Settings;
