import React from "react";

import { useStateContext } from "../context/ContextProvider";

const Button = ({ icon, bgColor, color, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius, width }}
      className="button"
    >
      {icon} {text}
    </button>
  );
};

export default Button;
