import React from "react";
//import { AnimatePresence, motion, MotionConfig } from "framer-motion";

import AdminWrap from "../wrapper/AdminWrap";
import { Header } from "../components";
import { Tooltip } from "../components";

import { useStateContext } from "../context/ContextProvider";

function Tooltips() {
  const { currentColor } = useStateContext();

  return (
    <div className="Container">
      <Header category="Page" title="Tooltips" />
      <div className="tooltip-Container">
        <Tooltip content="I am A Top Tooltip!" position="top">
          <div className="con-tooltip" style={{ background: currentColor }}>
            <p> Top </p>
          </div>
        </Tooltip>

        <Tooltip content="I am A Left Tooltip!" position="left">
          <div className="con-tooltip" style={{ background: currentColor }}>
            <p> Left </p>
          </div>
        </Tooltip>

        <Tooltip content="I am A Right Tooltip!" position="right">
          <div className="con-tooltip" style={{ background: currentColor }}>
            <p> Right </p>
          </div>
        </Tooltip>
        <Tooltip content="I am A Bottom Tooltip!" position="bottom">
          <div className="con-tooltip" style={{ background: currentColor }}>
            <p> Bottom </p>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default AdminWrap(Tooltips, "Tooltip");
