import React from "react";
const initialData = [];
const BookReduer = (state = initialData, action) => {
  switch (action.type) {
    case "LOAD_DATA": {
      let arr = []
      arr = action.data;
      return arr;
    }
    
    default:
      return state;
  }
};


export default BookReduer;
