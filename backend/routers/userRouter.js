const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

router.get(
  "/profile/:id",
  authController.isSignedIn,
  authController.isAuthenticated,
  userController.getUser
);

module.exports = router;
