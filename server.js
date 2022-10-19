const express = require("express");
const connectDB = require("./config/connectDB");
const contactRoute = require("./routes/contact");
const app = express();
require("dotenv").config();

app.use(express.json());

connectDB();

app.use("/api/contact", contactRoute);

app.listen(process.env.Port, () =>
  console.log(`app is runnig on port ${process.env.Port}`)
);
