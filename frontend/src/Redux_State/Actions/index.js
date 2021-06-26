export const loadData = (data) => {
  return {
    type: "LOAD_DATA",
    data,
  };
};

export const userSignIn = (user) => {
  return {
    type: "SIGNIN",
    user,
  };
};

export const getOrderData = (data) => {
    return {
        type: "LOAD_Order_DATA",
        data,
      };
}