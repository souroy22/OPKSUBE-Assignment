import React, { useRef, useState } from "react";
import "./OrderPage.css";
import { createAOrder } from "../../API/Book";
import Base from "../Base";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../../API/Auth";

const OrderPage = () => {
  const bookData = useSelector((state) => state.OrderReduer);
  const userData = useSelector((state) => state.authReducer);
  const { user, token } = isAuthenticated();

  const nameField = useRef();
  const emailField = useRef();
  const mobileNoField = useRef();
  const addressField = useRef();
  const makeAOrder = () => {
    const bookId = bookData._id;
    const id = user._id;
    const name = nameField.current.value;
    const email = emailField.current.value;
    const mobileNo = mobileNoField.current.value;
    const address = addressField.current.value;
    const userDetails = { name, email, mobileNo, address };
    const data = { userDetails, bookData };
    console.log(userDetails);
    createAOrder(bookId, id, token, data)
      .then((data) => {})
      .catch(console.log("signin request failed"));
    nameField.current.value = "";
    emailField.current.value = "";
    mobileNoField.current.value = "";
    addressField.current.value = "";
    alert("Successfully Ordered");
  };

  return (
    <Base>
      <div>
        <h1>--------Order Summery------</h1>
        <h3>Book Name: {bookData.name}</h3>
        <h3>Book Name: {bookData.price}</h3>
        <h3>Book Name: {bookData.description}</h3>
      </div>
      <div className="order-container">
        <input placeholder="Enter Name" className="inpt" ref={nameField} />
        <input placeholder="Email" className="inpt" ref={emailField} />
        <input
          placeholder="Enter Mobile Number"
          ref={mobileNoField}
          className="inpt"
        />
        <input placeholder="Address" className="inpt" ref={addressField} />
        <button
          className="btn btn-success"
          style={{ marginTop: "40px" }}
          onClick={() => makeAOrder()}
        >
          Order Now
        </button>
      </div>
    </Base>
  );
};

export default OrderPage;
