//AUTH ACTIONS
export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

//USER ACTIONS
export const requestUserInfo = () => ({
  type: "USER_INFO_REQUEST",
});

export const receiveUserInfo = (appUser) => ({
  type: "USER_INFO_RECEIVE",
  appUser,
});

export const userInfoError = (err) => ({
  type: "USER_INFO_FAILURE",
  err,
});

export const userSignOut = () => ({
  type: "USER_SIGN_OUT",
});

//GROUP DATA ACTIONS
export const requestGroupData = () => ({
  type: "GROUP_DATA_REQUEST",
});

export const receiveGroupData = (groupData) => ({
  type: "GROUP_DATA_RECEIVE",
  groupData,
});

export const GroupDataError = (err) => ({
  type: "GROUP_DATA_FAILURE",
  err,
});

export const changeCurrentGroup = (groupIndex) => ({
  type: "CHANGE_CURRENT_GROUP",
  groupIndex,
});

export const addSuggestion = (suggestion) => ({
  type: "ADD_SUGGESTION",
  suggestion,
});

export const removeSuggestion = (deletedId) => ({
  type: "REMOVE_SUGGESTION",
  deletedId,
});
