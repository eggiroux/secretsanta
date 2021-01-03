export const validateLink = (inputLink) => {
  const arrayString = inputLink.split(".");
  console.log(arrayString);

  if (arrayString[0] === "www") {
    arrayString.splice(0, 1, "http://www");
  } else if (arrayString[0] !== "http://www") {
    arrayString.unshift("http://www");
  }

  return arrayString.join(".");
};
