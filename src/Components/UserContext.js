import React from "react";

import { users } from "../data/data";
const userId = 873681764;

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const appUser = users.find((user) => user.id === userId);

  return (
    <UserContext.Provider
      value={{
        appUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
