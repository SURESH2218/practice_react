import React, { useReducer } from "react";

const intialState = {
  data: [
    {
      name: "Alice",
      id: 1,
      age: 28,
      number: 1234567890,
    },
    {
      name: "Bob",
      id: 2,
      age: 34,
      number: 2345678901,
    },
    {
      name: "Charlie",
      id: 3,
      age: 29,
      number: 3456789012,
    },
    {
      name: "David",
      id: 4,
      age: 42,
      number: 4567890123,
    },
    {
      name: "Eve",
      id: 5,
      age: 31,
      number: 5678901234,
    },
  ],
};
const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "DELETE":
      const newPersons = state.data.filter((eachPerson) => {
        return eachPerson.id != action.id;
      });
      console.log(newPersons);
      return {
        ...state,
        data: newPersons,
      };

    case "EDIT":
      const newArray = state.data.find((eachItem) => {
        return eachItem.id === action.id;
      });
      console.log(newArray);
      return {
        ...state,
      };
  }
  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(state);
  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
    // console.log(id);
  };
  const handleEdit = (id) => {
    dispatch({
      type: "EDIT",
      id: id,
    });
  };
  return (
    <div>
      <h1>USEREDUCER</h1>
      <h2>users length:{state.data.length}</h2>
      {state.data.map((item) => {
        const { id, age, number, name } = item;
        return (
          <div key={id} className="border p-5 m-4">
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{number}</h1>
            <button
              onClick={() => handleDelete(id)}
              className="border bg-black text-white px-2 py-1 rounded-md mr-2"
            >
              delete
            </button>
            <button
              onClick={() => handleEdit(id)}
              className="border bg-black text-white px-2 py-1 rounded-md mr-2"
            >
              edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducer;
