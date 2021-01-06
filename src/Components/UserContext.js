import React from "react";

import { getUserData } from "../helpers/api-helpers";

const userId = 873681764;

export const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  let [appUser, setAppUser] = React.useState(null);
  let [currentGroup, setCurrentGroup] = React.useState(null);
  let [currentGroupIndex, setCurrentGroupIndex] = React.useState(0);
  let [userGroups, setUserGroups] = React.useState(null);

  React.useEffect(() => {
    if (!userGroups) {
      return;
    }
    setCurrentGroup(userGroups[currentGroupIndex]);
  }, [currentGroupIndex, currentGroup, userGroups]);

  React.useEffect(() => {
    getUserData(userId)
      .then((data) => {
        console.log(data);
        setUserGroups(data.userGroups);
        setAppUser(data.userData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider
      value={{
        appUser,
        currentGroup,
        userGroups,
        setCurrentGroupIndex,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
