import React from "react";

import { Route, Routes } from "react-router-dom";

import {
  Main,
  Orders,
  Employees,
  Customers,
  ResizeablePanel,
  Tooltips,
  Calendar,
  Kanban,
  Editor,
  ColorPicker,
  Stacked,
  Pyramid,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
} from "./pages";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />

      {/* pages  */}
      <Route path="/orders" element={<Orders />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/Panel-demo" element={<ResizeablePanel />} />
      <Route path="/tooltip-demo" element={<Tooltips />} />

      {/* apps  */}
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/editor" element={<Editor />} />

      <Route path="/color-picker" element={<ColorPicker />} />

      {/* charts  */}
      <Route path="/line" element={<Line />} />
      <Route path="/area" element={<Area />} />
      <Route path="/bar" element={<Bar />} />
      <Route path="/pie" element={<Pie />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/color-mapping" element={<ColorMapping />} />
      <Route path="/pyramid" element={<Pyramid />} />
      <Route path="/stacked" element={<Stacked />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default Routing;
