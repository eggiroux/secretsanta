import produce from "immer";

const initialState = {
  status: "loading",
  appUser: null,
  error: "",
};

export default function appUserReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case "USER_INFO_REQUEST": {
      return produce(state, (draftState) => {
        draftState.status = "loading";
        draftState.error = "";
      });
    }
    case "USER_INFO_RECEIVE": {
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.appUser = action.appUser;
        draftState.error = "";
      });
    }
    case "USER_INFO_FAILURE": {
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.err;
      });
    }

    case "USER_SIGN_OUT": {
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.appUser = null;
        draftState.error = "";
      });
    }

    default:
      return state;
  }
}
