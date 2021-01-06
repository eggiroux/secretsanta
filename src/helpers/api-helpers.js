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

export const addSuggestionToGroup = (groupId, forName, suggestion) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      groupId,
      forName,
      suggestion,
    }),
  };

  return fetch(`/suggestion/`, options).then((res) => res.json());
};

export const deleteSuggestion = (groupId, suggId) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      groupId,
      suggId,
    }),
  };

  return fetch(`/suggestion/`, options).then((res) => res.json());
};
