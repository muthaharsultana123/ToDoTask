import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { StateProvider } from "./context/StateProvider.jsx"
import reducer,{ initialState } from "./context/reducer.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
    <StateProvider initialState={initialState} reducer={reducer} >
      <App />
    </StateProvider>
    </NextUIProvider>
  </React.StrictMode>
);
