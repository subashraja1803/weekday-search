const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const fetchData = (limit, offset) => {
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      limit,
      offset,
    }),
  };
  return fetch(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
