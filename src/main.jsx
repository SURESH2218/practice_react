import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Usestate from "./hooks/Usestate.jsx";
import Usestate1 from "./hooks/Usestate1.jsx";
import ShowOrHide from "./hooks/ShowOrHide.jsx";
import Form from "./hooks/Form.jsx";
import Todo from "./hooks/Todo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Todo />
  </>
);
