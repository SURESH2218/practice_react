import React from "react";

import { useContext, createContext } from "react";

const data = [
  {
    id: "1",
    name: "suresh",
    age: "222",
  },
  {
    id: "1",
    name: "suresh",
    age: "222",
  },
  {
    id: "1",
    name: "suresh",
    age: "222",
  },
  {
    id: "1",
    name: "suresh",
    age: "222",
  },
];
const SecondUserContext = createContext();

export const SecondUserContextProvider = ({ children }) => {
  return (
    <SecondUserContext.Provider value={data}>
      {children}
    </SecondUserContext.Provider>
  );
};

export default SecondUserContext;
