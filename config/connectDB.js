const mongoose = require("mongoose");
//Set up default mongoose connection

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
  }
};

module.exports = connectDB;
