// the most important file in react App
import React from "react";
import ReactDOM from "react-dom";

// css that we want to apply
import "./index.css";

import App from "./App";

// general parameters that we want the whole app to have is in contextProvider
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
