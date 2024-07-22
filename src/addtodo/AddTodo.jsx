import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <div>
      <form action="" onSubmit={addTodoHandler}>
        <input
          type="text"
          name=""
          id=""
          placeholder="enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
