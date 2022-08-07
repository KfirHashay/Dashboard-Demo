import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Topvariants = {
  active: {
    opacity: 1,
    top: -30,
    transition: {
      delay: 0,
      duration: 0.4,
      ease: "easeOut",
      type: "spring",
    },
  },
  inactive: {
    opacity: 0,
    top: -38,
  },
  exit: {
    top: -38,
    transition: { delay: 0.1, duration: 0.1, ease: "easeIn" },
  },
};

const BotttomCentervariants = {
  active: {
    opacity: 1,
    bottom: -30,
    transition: {
      delay: 0,
      duration: 0.4,
      ease: "easeOut",
      type: "spring",
    },
  },
  inactive: {
    opacity: 0,
    bottom: -38,
  },
  exit: {
    bottom: -38,
    transition: { delay: 0.1, duration: 0.1, ease: "easeIn" },
  },
};

const Rightvariants = {
  active: {
    opacity: 1,
    left: 95,
    transition: {
      delay: 0,
      duration: 0.4,
      ease: "easeOut",
      type: "spring",
    },
  },
  inactive: {
    opacity: 0,
    left: 103,
  },
  exit: {
    left: 103,
    transition: { delay: 0.1, duration: 0.1, ease: "easeIn" },
  },
};
const Leftvariants = {
  active: {
    opacity: 1,
    right: 90,
    transition: {
      delay: 0,
      duration: 0.4,
      ease: "easeOut",
      type: "spring",
    },
  },
  inactive: {
    opacity: 0,
    right: 98,
  },
  exit: {
    right: 98,
    transition: { delay: 0.1, duration: 0.1, ease: "easeIn" },
  },
};

export const motionProps = {
  initial: "inactive",
  animate: "active",
  exit: "exit",
};

export const varientsProps = {};
const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            {...(props.position === "top"
              ? { variants: Topvariants }
              : props.position === "bottom"
              ? { variants: BotttomCentervariants }
              : props.position === "right"
              ? { variants: Rightvariants }
              : props.position === "left"
              ? { variants: Leftvariants }
              : {})}
            {...motionProps}
            className={`Tooltip-Tip ${props.position || "top"}`}
          >
            {/* Content */}
            {props.content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
