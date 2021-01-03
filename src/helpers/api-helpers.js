import { groups } from "../data/data";

export const getUserData = (userId) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`/users/${userId}`, options).then((res) => {
    return res.json();
  });
};

export const addSuggestionToGroup = (groupId, member, list, suggestion) => {
  const group = groups.find((arrayGroup) => arrayGroup.id === groupId);

  group.members[member][list].push(suggestion);
};
