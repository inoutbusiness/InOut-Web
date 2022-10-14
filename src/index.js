import './index.css';
import InOutRoutes from './routes'

import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <InOutRoutes />
  </React.StrictMode>,
  rootElement
);