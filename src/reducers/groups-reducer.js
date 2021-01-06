import produce from "immer";

const initialState = {
  status: "loading",
  groups: null,
  currentGroup: null,
  currentSuggestions: null,
  error: "",
};

export default function groupsReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case "GROUP_DATA_REQUEST": {
      return produce(state, (draftState) => {
        draftState.status = "loading";
        draftState.error = "";
      });
    }
    case "GROUP_DATA_RECEIVE": {
      return produce(state, (draftState) => {
        draftState.status = "idle";
        draftState.groups = action.groupData;
        draftState.currentGroup = action.groupData[0];
        draftState.currentSuggestions = action.groupData[0].suggestions;
        draftState.error = "";
      });
    }
    case "GROUP_DATA_FAILURE": {
      return produce(state, (draftState) => {
        draftState.status = "error";
        draftState.error = action.err;
      });
    }
    case "CHANGE_CURRENT_GROUP": {
      return produce(state, (draftState) => {
        draftState.currentGroup = state.groups[action.groupIndex];
        draftState.error = "";
      });
    }
    case "ADD_SUGGESTION": {
      return produce(state, (draftState) => {
        draftState.currentSuggestions.push(action.suggestion);
        draftState.error = "";
      });
    }
    case "REMOVE_SUGGESTION": {
      return produce(state, (draftState) => {
        draftState.currentSuggestions = state.currentSuggestions.filter(
          (item) => item.id !== action.deletedId
        );
        draftState.error = "";
      });
    }

    default:
      return state;
  }
}
