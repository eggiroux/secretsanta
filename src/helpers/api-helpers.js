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
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      groupId,
      member,
      list,
      suggestion,
    }),
  };

  return fetch(`/suggestion/`, options).then((res) => res.json());
};
