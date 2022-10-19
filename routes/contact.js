const express = require("express");
const { Register, Login } = require("../controlles/contact");
const { isAuth } = require("../middlewear/isAuth");
const {
  registervalidation,
  validation,
  loginvalidation,
} = require("../middlewear/validation");
const contactRoute = express.Router();

contactRoute.post("/register", registervalidation, validation, Register);
contactRoute.post("/login", loginvalidation, validation, Login);
contactRoute.get("/current", isAuth, (req, res) => {
  res.send({ contacts: req.user });
});
module.exports = contactRoute;
