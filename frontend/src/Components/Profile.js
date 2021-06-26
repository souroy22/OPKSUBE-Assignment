import React, { useEffect, useState } from "react";
import Base from "./Base";
import { useSelector } from "react-redux";
import Book from "./Book/Book";
import { isAuthenticated } from "../API/Auth";
import { getPurchesList } from "./../API/UserAPI";

const Profile = () => {
  const { user, token } = isAuthenticated();
  const [purchesList, setPurchesList] = useState([]);
  //   const data = useSelector((state) => state.authReducer);
  //   console.log(data);
  useEffect(async () => {
    const data = await getPurchesList(user._id, token);
    setPurchesList(data.purchases);
  }, []);
  return (
    <Base>
      <div>
        <h1>Name: {user.name}</h1>
        <h1>Email: {user.email}</h1>
        <h3>-------Your Previous Order--------</h3>
        {purchesList.length > 0 &&
          purchesList.map((order) => {
            return (
              <div
                key={order._id}
                style={{
                  boxShadow: "0 0 10px gray",
                  margin: "30px",
                  width: "400px",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <h1>{order.name}</h1>
                <h1>{order.price}</h1>
                <h1>{order.description}</h1>
              </div>
            );
          })}
      </div>
    </Base>
  );
};

export default Profile;
