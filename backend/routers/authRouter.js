const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/signup", authController.signUp);
router.post("/signin", authController.signin);
router.get("/signout", authController.signout);

module.exports = router;
