import React from "react";

const initialState = {
  name: "suresh",
  age: 2,
};

const UserContext = React.createContext(initialState);

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};

export default UserContext;
