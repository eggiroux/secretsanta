import { combineReducers } from "redux";

import auth from "./auth-reducer";
import appUser from "./appUser-reducer";
import groups from "./groups-reducer";
// import submission from "./submission-reducer";

export default combineReducers({
  auth,
  appUser,
  groups,
});
