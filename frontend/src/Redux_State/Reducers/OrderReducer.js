import React from "react";
const initialData = [];
const OrderReduer = (state = initialData, action) => {
  switch (action.type) {
    case "LOAD_Order_DATA": {
      let arr = []
      arr = action.data;
      return arr;
    }
    
    default:
      return state;
  }
};


export default OrderReduer;
