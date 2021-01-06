import React from "react";

import { getUserData } from "../helpers/api-helpers";

import { useSelector, useDispatch } from "react-redux";

import { requestUserInfo, receiveUserInfo, userInfoError } from "../actions";

export const UserProvider = ({ children }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);

  React.useEffect(() => {
    dispatch(requestUserInfo());

    getUserData(userId)
      .then((data) => {
        console.log(data);
        dispatch(receiveGroupData(data.userGroups));
        dispatch(receiveUserInfo(data.userData));
      })
      .catch((err) => dispatch(userInfoError(err)));
  }, []);

  return <UserContext.Provider>{children}</UserContext.Provider>;
};
