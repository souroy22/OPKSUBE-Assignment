const Book = require("../models/BookModel");
const User = require("../models/UserModel");

const bookController = {
  addABook: async (req, res) => {
    try {
      const { name, price, description, quantity } = req.body;
      if (!(name && price && description && quantity)) {
        return res.status(400).json({ err: "Fill all the input field" });
      }
      const newBook = new Book({
        name,
        price,
        description,
        quantity: parseInt(quantity),
      });
      await newBook.save();
      return res.status(200).json(newBook);
    } catch (err) {
      console.log(err.message);
      return res
        .status(500)
        .json({ err: "Internal server error while adding a Book" });
    }
  },

  getBookById: async (req, res) => {
    try {
      const { bookId } = req.params;
      if (!bookId) {
        return res.status(400).json({ err: "please pass a valid book" });
      }
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(400).json({ err: "Sorry can't find such book" });
      }
      return res.status(200).json(book);
    } catch (err) {
      console.log(err.message);
      return res
        .status(500)
        .json({ err: "Internal server error while finding a Book" });
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find();
      if (!allBooks) {
        return res.status(400).json({ err: "Sorry can't find any book" });
      }
      return res.status(200).json(allBooks);
    } catch (err) {
      console.log(err.message);
      return res
        .status(500)
        .json({ err: "Internal server error while finding all Book" });
    }
  },

  orderABook: async (req, res) => {
    try {
      const { bookId, id } = req.params;
      if (!bookId) {
        return res.status(400).json({ err: "please pass a valid book" });
      }
      const book = await Book.findById(bookId);
      const user = await User.findById(id);
      if (!user) {
        return res.status(400).json({ err: "Please try again or login!" });
      }
      if (!book) {
        return res.status(400).json({ err: "Sorry can't find such book" });
      }
      const qty = book.quantity - 1;
      await Book.findByIdAndUpdate(
        bookId,
        { $set: { quantity: qty } },
        { new: true, useFindAndModify: false }
      );
      await User.findByIdAndUpdate(
        id,
        { $push: { purchases: req.body } },
        { new: true, useFindAndModify: false }
      );
      return res.status(200).json({ msg: "Ordered successfull", user });
    } catch (err) {
      console.log(err.message);
      return res
        .status(500)
        .json({ err: "Internal server error while ordering a Book" });
    }
  },
};

module.exports = bookController;
