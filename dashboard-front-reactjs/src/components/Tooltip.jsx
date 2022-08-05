import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  active: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const motionProps = {
  variants: variants,
  initial: "inactive",
  animate: "active",
  exit: "inactive",
};

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
            {...motionProps}
            className={`Tooltip-Tip ${props.direction || "top"}`}
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
