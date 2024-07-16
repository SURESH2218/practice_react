import React, { useState } from "react";

const Usestate1 = () => {
  const dataObj = [
    {
      id: 1,
      firstname: "suresh",
      lastname: "alabani",
      age: 122,
    },
    {
      id: 2,
      firstname: "srinu",
      lastname: "donkina",
      age: 22,
    },
    {
      id: 2,
      firstname: "srinu",
      lastname: "donkina",
      age: 22,
    },
    {
      id: 2,
      firstname: "srinu",
      lastname: "donkina",
      age: 22,
    },
    {
      id: 2,
      firstname: "srinu",
      lastname: "donkina",
      age: 22,
    },
    {
      id: 2,
      firstname: "srinu",
      lastname: "donkina",
      age: 22,
    },
    {
      id: 2,
      firstname: "srinu",
      lastname: "donkina",
      age: 22,
    },
    {
      id: 2,
      firstname: "srinu",
      lastname: "donkina",
      age: 22,
    },
  ];

  const [data, setData] = useState(dataObj);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDelete = (id) => {
    const filteredData = data.filter((eachItem) => eachItem.id !== id);
    setData(filteredData);
    setItemToDelete(null);
  };

  return (
    <>
      <h1>Data of Persons</h1>
      {data.map((person, index) => (
        <Card key={index} person={person} setItemToDelete={setItemToDelete} />
      ))}
      {itemToDelete && (
        <ConfirmationDialog
          itemToDelete={itemToDelete}
          handleDelete={handleDelete}
          setItemToDelete={setItemToDelete}
        />
      )}
    </>
  );
};

const Card = ({ person, setItemToDelete }) => {
  const { firstname, lastname, age, id } = person;
  return (
    <div className="border-2 list-none p-5 inline-block ml-4 mt-5 hover:shadow-md cursor-pointer shadow-sm rounded-md">
      <li>{firstname}</li>
      <li>{lastname}</li>
      <li>{age}</li>
      <button
        onClick={() => setItemToDelete(person)}
        className="bg-red-700 text-white rounded-sm shadow-sm border-collapse px-2 py-1"
      >
        Delete
      </button>
    </div>
  );
};

const ConfirmationDialog = ({ itemToDelete, handleDelete, setItemToDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md shadow-md">
        <p>Do you really want to delete {itemToDelete.firstname}?</p>
        <div className="mt-4 flex justify-end space-x-3">
          <button
            onClick={() => handleDelete(itemToDelete.id)}
            className="bg-red-700 text-white rounded-sm shadow-sm px-2 py-1"
          >
            Yes
          </button>
          <button
            onClick={() => setItemToDelete(null)}
            className="bg-gray-300 text-black rounded-sm shadow-sm px-2 py-1"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usestate1;
