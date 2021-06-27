import React from "react";
import Books from "../Books/Books";
import { useState, useEffect } from "react";
import { fetchAllBooks } from "../../API/Book";
import Base from "./../Base";
import { useDispatch } from "react-redux";
import { loadData, loadFilteredData } from "../../Redux_State/Actions/index";

const HomePage = () => {
  const dispatch = useDispatch();
  
  useEffect(async () => {
    const data = await fetchAllBooks();
    dispatch(loadData(data));
    dispatch(loadFilteredData(data));
  }, []);
  return (
    <Base>
      <Books />
    </Base>
  );
};

export default HomePage;
