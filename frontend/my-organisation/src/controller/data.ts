const baseUrl = "http://localhost:6789/api/organisation";
const baseOptions = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
};
export const fetchTree = async () => {
  fetch(baseUrl, { ...baseOptions, method: "GET" }).then((response) =>
    response.json().then((data) => data)
  );
};
