import React, { useEffect, useState } from "react";
import Base from "./Base";
import { useSelector } from "react-redux";
import Book from "./Book/Book";
import { isAuthenticated } from "../API/Auth";
import { getPurchesList } from "./../API/UserAPI";

const Profile = () => {
  const { user, token } = isAuthenticated();
  const [purchesList, setPurchesList] = useState([]);

  useEffect(async () => {
    const data = await getPurchesList(user._id, token);
    setPurchesList(data.purchases);
  }, []);
  console.log(purchesList);
  return (
    <Base>
      <div>
        <h1>
          <span style={{ color: "gold" }}>Name: </span>
          {user.name}
        </h1>
        <h1>
          <span style={{ color: "gold" }}>Email: </span>
          {user.email}
        </h1>
        <h3>
          <span style={{ color: "green" }}>
            -------Your Previous Order--------
          </span>
        </h3>
        {purchesList.length > 0 ? (
          purchesList.map((order) => {
            return (
              <div
                key={order.bookData._id}
                style={{
                  boxShadow: "0 0 10px gray",
                  margin: "30px",

                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <div>
                  <h1>
                    <span style={{ color: "navy" }}>Order Book Name: </span>
                    {order.bookData.name}
                  </h1>
                  <h1>
                    <span style={{ color: "navy" }}>Order Book Price: </span>₹
                    {order.bookData.price}
                  </h1>
                </div>
                <div>
                  <h1>
                    <span style={{ color: "navy" }}>
                      Order Book Contact No:{" "}
                    </span>
                    {order.userDetails.mobileNo}
                  </h1>
                  <h1>
                    <span style={{ color: "navy" }}>Order Book Address: </span>
                    {order.userDetails.address}
                  </h1>
                </div>
              </div>
            );
          })
        ) : (
          <h2 style={{ color: "gray" }}>No Previous Order!</h2>
        )}
      </div>
    </Base>
  );
};

export default Profile;
