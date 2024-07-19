import React, { useState, useEffect } from "react";

const Todo = () => {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("todoList")) || [];
    setList(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (error) {
      setError("");
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (message.trim()) {
      if (editId) {
        setList((prevList) =>
          prevList.map((item) =>
            item.id === editId ? { ...item, message: message } : item
          )
        );
        setEditId(null);
      } else {
        setList((prevList) => [
          ...prevList,
          {
            id: Date.now().toString(),
            message: message,
          },
        ]);
      }
      setMessage("");
    } else {
      setError("Please enter something");
    }
  };

  const handleEdit = (id) => {
    const item = list.find((item) => item.id === id);
    setMessage(item.message);
    setEditId(id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setList((prevList) => prevList.filter((item) => item.id !== id));
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setMessage("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto mt-10">
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
            className="flex-grow border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter something"
            value={message}
            onChange={handleMessage}
            onFocus={()=>setError("")}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="border-2 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              {editId ? "Update" : "Add"}
            </button>
            {editId && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="border-2 p-2 rounded-md bg-gray-500 text-white hover:bg-gray-600"
              >
                Cancel
              </button>
            )}
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
      <hr className="my-4 w-full" />
      <ul className="max-w-md mx-auto space-y-2">
        {list.map(({ id, message }) => (
          <li
            key={id}
            className="flex justify-between items-center border-2 p-4 rounded-md bg-gray-100"
          >
            {editId === id ? (
              <>
                <input
                  className="flex-grow border-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  value={message}
                  onChange={(e) =>
                    setList((prevList) =>
                      prevList.map((item) =>
                        item.id === id
                          ? { ...item, message: e.target.value }
                          : item
                      )
                    )
                  }
                />
                <button
                  onClick={handleCancelEdit}
                  className="border-2 p-2 rounded-md bg-gray-500 text-white hover:bg-gray-600 ml-2"
                >
                  update
                </button>
              </>
            ) : (
              <>
                <span className="flex-grow w-4">{message}</span>
                <button
                  onClick={() => handleEdit(id)}
                  className="border-2 p-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 ml-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="border-2 p-2 rounded-md bg-red-500 text-white hover:bg-red-600 ml-2"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
