const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const authController = {
  signUp: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!(name && email && password)) {
        return res.status(400).json({ err: "Please enter all input field" });
      }
      if (password.length < 6) {
        return res.status(400).json({ err: "Please enter a long password" });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ err: "This EmailId is already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const newUser = new User({ name, email, password });
      newUser.password = await bcrypt.hash(newUser.password, salt);
      await newUser.save();
      return res.status(200).json(newUser);
    } catch (err) {
      console.log(`Error while signup and message is ${err.message}`);
      return res
        .status(400)
        .json({ error: `Error while signup ${err.message}` });
    }
  },
  signin: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email || password)) {
        return res.status(400).json({ err: "Please enter all input field" });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ err: "mailId or password doesn't match" });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res
          .status(400)
          .json({ err: "mailId or password doesn't match" });
      }
      const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
      res.cookie("token", token, {
        expire: new Date() + 60 * 60 * 24 * 30,
      });
      return res
        .status(200)
        .json({ msg: "User Successfully LogIn!", user, token });
    } catch (err) {
      console.log(`Error while signin and message is ${err.message}`);
      return res
        .status(500)
        .json({ error: `Error while signin ${err.message}` });
    }
  },
  signout: async (req, res) => {
    try {
      res.clearCookie("token");
      return res.status(200).json("Successfully Logout!");
    } catch (err) {
      console.log(`Error while signout and message is ${err.message}`);
      return res
        .status(500)
        .json({ error: `Error while signout ${err.message}` });
    }
  },

  isSignedIn: expressJwt({
    secret: process.env.SECRET_KEY,
    algorithms: ["HS256"],
    userProperty: "auth",
  }),

  // custom Middleware for auth check
  isAuthenticated: async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(403).json({ error: "User not found!" });
    }
    req.profile = user;

    // first check that is signedin or not, then check that user is authorised user or not
    let checker = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!checker) {
      return res.status(403).json({ error: "Access Denied!" });
    }
    next();
  },
};

module.exports = authController;
