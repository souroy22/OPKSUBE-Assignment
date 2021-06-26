require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const connection = require("./DB/ConnectingToDB");
const authRouter = require("./routers/authRouter");
const bookRouter = require("./routers/bookRouter");
const userRouter = require("./routers/userRouter");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors());


connection();

app.use("/bookStore/auth", authRouter);
app.use("/bookStore/book", bookRouter);
app.use("/bookStore/user", userRouter);

app.listen(PORT, (err) =>
  err
    ? console.log(`Server down due to ${err}`)
    : console.log(`Server is running on PORT: ${PORT}`)
);
