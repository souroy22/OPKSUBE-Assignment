import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import "./Books.css";
import { useSelector } from "react-redux";

const Books = () => {
  const [books, setBooks] = useState([]);
  const data = useSelector((state) => state.BookReduer);
  // console.log(data);
  return (
    <div className="books-conainer">
      {data && data.map((book) => (
        <Book key={book._id} data={book} />
      ))}
    </div>
  );
};

export default Books;
