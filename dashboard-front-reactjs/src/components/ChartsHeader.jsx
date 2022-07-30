import React from "react";

const ChartsHeader = ({ category, title }) => (
  <div className="chart_header">
    <div>
      <p className="chart">Chart</p>
      <p className="category">{category}</p>
    </div>
    <p className="title">{title}</p>
  </div>
);

export default ChartsHeader;
