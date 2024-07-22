import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserContextProvider } from "./hooks/useContext/UserContext.jsx";
import Apps from "./Apps.jsx";
import SecondUserContext, {
  SecondUserContextProvider,
} from "./hooks/useContext/SecondUserContext.jsx";
import UseReducer from "./hooks/useReducer/UseReducer.jsx";
import AddTodo from "./addtodo/AddTodo.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Todos from "./addtodo/Todos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  </>
);
