import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserContextProvider } from "./hooks/useContext/UserContext.jsx";
import Apps from "./Apps.jsx";
import SecondUserContext, {
  SecondUserContextProvider,
} from "./hooks/useContext/SecondUserContext.jsx";
import UseReducer from "./hooks/useReducer/UseReducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <UseReducer />
  </>
);
