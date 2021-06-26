const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const bookController = require("../controllers/bookController");

router.post(
  "/create",
  bookController.addABook
);
router.get(
  "/details/:bookId/:id",
  authController.isSignedIn,
  authController.isAuthenticated,
  bookController.getBookById
);
router.get("/all", bookController.getAllBooks);

router.post(
  "/order/:bookId/:id",
  authController.isSignedIn,
  authController.isAuthenticated,
  bookController.orderABook
);

module.exports = router;
