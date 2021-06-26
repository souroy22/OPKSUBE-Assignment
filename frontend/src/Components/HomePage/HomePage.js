import React from "react";
import Books from "../Books/Books";
import { useState, useEffect } from "react";
import { fetchAllBooks } from "../../API/Book";
import Base from "./../Base";
import { useDispatch } from "react-redux";
import { loadData } from "../../Redux_State/Actions/index";

const HomePage = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  useEffect(async () => {
    const data = await fetchAllBooks();
    dispatch(loadData(data));
  }, []);
  return (
    <Base>
      <Books books={books} />
    </Base>
  );
};

export default HomePage;
