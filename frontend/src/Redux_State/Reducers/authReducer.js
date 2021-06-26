import React from "react";
const initialData = {name: "", email: "", purchesList: []};
const authReducer = (state = initialData, action) => {
  switch (action.type) {
    case "SIGNIN": {
      const data = action.user;
      const temp = state;
      temp.name = data.name;
      temp.email = data.email;
      temp.purchesList = data.purchases;
      return temp;
    }
    
    default:
      return state;
  }
};

export default authReducer;
