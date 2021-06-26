const mongoose = require("mongoose");

const connection = async () => {
  try {
    const connectionParams = {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.URI, connectionParams);
    console.log("Successfully connected to DB!");
  } catch (err) {
    console.log(`Error while connecting to DB and ERROR is ${err}`);
  }
};

module.exports = connection;