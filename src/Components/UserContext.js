import React from "react";

import { getUserData } from "../helpers/api-helpers";

const userId = 873681766;

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  let [appUser, setAppUser] = React.useState(null);
  let [currentGroup, setCurrentGroup] = React.useState(null);

  React.useEffect(() => {
    getUserData(userId)
      .then((data) => {
        console.log(data);
        setCurrentGroup(data.defaultGroup);
        setAppUser(data.userData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider
      value={{
        appUser,
        currentGroup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
