import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./routes";
import "./style/App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routing />
      </div>
    </Router>
  );
};
export default App;
