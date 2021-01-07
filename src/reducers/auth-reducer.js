import produce from "immer";

const initialState = {
  token: null,
  userId: 873681764,
  status: "loading",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ACCESS_TOKEN": {
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });
    }
    case "RECEIVE_ACCESS_TOKEN": {
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.token = action.token;
      });
    }
    case "RECEIVE_ACCESS_TOKEN_ERROR": {
      return produce(state, (draftState) => {
        draftState.status = "error";
      });
    }

    case "USER_SIGN_OUT": {
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.token = null;
        draftState.error = "";
      });
    }
    default: {
      return state;
    }
  }
}
