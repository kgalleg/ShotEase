import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ShotEase from "./components/ShotEase";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <ShotEase />
  </Router>,
  document.getElementById("root")
);