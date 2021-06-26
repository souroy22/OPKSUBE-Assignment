import { API } from "../backend";

export const fetchAllBooks = () => {
  return fetch(`${API}/book/all`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const fetchBookDetails = (bookId, id) => {
  return fetch(`${API}/book/details/${bookId}/${id}`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};



export const createAOrder = (bookId, id, token, data) => {
  return fetch(`${API}/book/order/${bookId}/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
      console.log("Success");
    })
    .catch((err) => console.log(err));
};
