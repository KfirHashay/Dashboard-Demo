import React from "react";
import { MdOutlineCancel, BsCheck } from ".";

import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { motion } from "framer-motion";

import { useStateContext } from "../context/ContextProvider";
import { themeColors } from "../data/dummy";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

function Settings({ toggle, check }) {
  const { setThemeSettings, currentColor, setColor } = useStateContext();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: 375,
        transition: { delay: 0, duration: 0.3, ease: "easeOut" },
      }}
      exit={{
        width: 0,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="settings_container nav-item"
    >
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="settings_panel"
      >
        <motion.div variants={itemVariants} className="settings_header">
          <p className="set_text">Settings </p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)" }}
            className="closeSettingsBtn"
          >
            <MdOutlineCancel />
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 0.996 }}
          className="settings_theme"
        >
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
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 0.996 }}
          className="settings_theme_color"
        >
          <p>Language(Coming Soon)</p>
          <div className="settings_theme_input_light">
            <input type="radio" id="heb" name="lan" value="heb" disabled />

            <label htmlFor="heb">Hebrew</label>
          </div>
          <div className="settings_theme_input_dark">
            <input type="radio" id="eng" name="lan" value="eng" disabled />
            <label htmlFor="eng">English</label>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 0.996 }}
          className="settings_theme_color"
        >
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
export default Settings;
