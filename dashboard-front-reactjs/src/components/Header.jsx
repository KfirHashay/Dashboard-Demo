import React from "react";

const Header = ({ category, title }) => (
  <div className="header">
    <p>{category}</p>
    <p>{title}</p>
  </div>
);

export default Header;
