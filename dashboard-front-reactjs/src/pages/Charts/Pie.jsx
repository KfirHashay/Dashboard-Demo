import React from "react";
import AdminWrap from "../../wrapper/AdminWrap";

import { pieChartData } from "../../data/dummy";
import { ChartsHeader, Pie as PieChart } from "../../components";

const Pie = () => {
  const currentMode = localStorage.getItem("theme") === "light" ? true : false;

  return (
    <div className="charts_container">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="component">
        <PieChart
          id="chart-pie"
          currentMode={currentMode}
          data={pieChartData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
};

export default AdminWrap(Pie, "pie");
