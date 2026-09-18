import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Remove default browser spacing
document.body.style.margin = "0";
document.body.style.padding = "0";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
