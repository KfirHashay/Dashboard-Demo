import React from "react";
import AdminWrap from "../../wrapper/AdminWrap";

import { ChartsHeader, Stacked as StackedChart } from "../../components";

const Stacked = () => {
  const currentMode = localStorage.getItem("theme") === "light" ? true : false;

  return (
    <div className="charts_container">
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="component">
        <StackedChart currentMode={currentMode} />
      </div>
    </div>
  );
};

export default AdminWrap(Stacked, "stacked");
