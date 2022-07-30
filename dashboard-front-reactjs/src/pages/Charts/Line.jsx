import React from "react";
import AdminWrap from "../../wrapper/AdminWrap";

import { ChartsHeader, LineChart } from "../../components";

const Line = () => {
  const currentMode = localStorage.getItem("theme") === "light" ? true : false;

  return (
    <div className="charts_container">
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className="component">
        <LineChart currentMode={currentMode} />
      </div>
    </div>
  );
};

export default AdminWrap(Line, "line");
