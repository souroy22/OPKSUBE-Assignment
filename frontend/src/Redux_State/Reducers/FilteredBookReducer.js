import React from "react";
const initialData = [];
const FilteredBookReduer = (state = initialData, action) => {
  switch (action.type) {
    case "LOAD_FILTERED_DATA": {
      let arr = [];
      arr = action.data;
      return arr;
    }
    case "FIND_BOOK": {
      let temp = state;
      temp = temp.filter((book) =>
        book.name.toLowerCase().includes(action.val.toLowerCase())
      );
      return temp;
    }

    default:
      return state;
  }
};

export default FilteredBookReduer;
