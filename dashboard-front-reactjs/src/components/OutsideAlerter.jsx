import React, { useRef, useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

function useOutsideAlerter(ref) {
  const { handleClick, setThemeSettings, screenSize, setActiveMenu } =
    useStateContext();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick("");
        setThemeSettings(false);
        console.log("clicked1");
      }
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        screenSize <= 1120
      ) {
        setActiveMenu(false);
        console.log("clicked2");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClick, setThemeSettings, setActiveMenu, screenSize]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideAlerter;
