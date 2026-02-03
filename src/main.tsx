import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CRMProvider } from "./context/CRMContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CRMProvider>
      <App />
    </CRMProvider>
  </React.StrictMode>
);
