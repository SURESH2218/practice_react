import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    return state.todos;
  });

  console.log(todos);
  return (
    <>
      {todos.map((todo) => {
        // console.log(todo);
        return (
          <div key={todo.id}>
            <div>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
