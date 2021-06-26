import { API } from "../backend";

export const getPurchesList = (id, token) => {
  return fetch(`${API}/user/profile/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
      console.log("Success");
    })
    .catch((err) => console.log(err));
};
