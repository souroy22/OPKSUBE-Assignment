import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOrderData } from "../../Redux_State/Actions/index";

const Book = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-card">
      <h1>{data.name}</h1>
      <h1>{data.price}</h1>
      <h1>{data.description}</h1>
      <Link
        to="/create/order"
        className="btn btn-success"
        onClick={() => dispatch(getOrderData(data))}
      >
        Buy Now
      </Link>
    </div>
  );
};

export default Book;
