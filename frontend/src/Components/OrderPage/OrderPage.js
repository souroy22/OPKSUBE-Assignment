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
  const [userDetails, setUserDetails] = useState({
    name: user.name,
    email: user.email,
    mobileNo: "",
    address: "",
  });
  const makeAOrder = () => {
    const bookId = bookData._id;
    const id = user._id;
    const data = { userDetails, bookData };
    console.log(bookId, id, token, data);
    createAOrder(bookId, id, token, data)
      .then((data) => {})
      .catch(console.log("signin request failed"));
    alert("Successfully Ordered")
  };

  const onChange = (name) => (event) => {
    const value = event.target.value;
    setUserDetails({ ...userDetails, [name]: value });
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
        <input
          placeholder="Enter Name"
          className="inpt"
          onChange={() => onChange("name")}
          value={userDetails.name}
        />
        <input
          placeholder="Email"
          className="inpt"
          onChange={() => onChange("email")}
          value={userDetails.email}
        />
        <input
          placeholder="Enter Mobile Number"
          onChange={() => onChange("mobileNo")}
          
          className="inpt"
        />
        <input
          placeholder="Address"
          className="inpt"
          onChange={() => onChange("address")}
          
        />
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
