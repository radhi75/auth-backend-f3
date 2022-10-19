const jwt = require("jsonwebtoken");
const contact = require("../modals/contact");

exports.isAuth = async (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = await jwt.verify(token, process.env.secretKey);
    if (!decode) {
      return res.status(400).send("you are not authorized");
    }
    const contacts = await contact.findById(decode.id);
    req.user = contacts;
    next();
  } catch (error) {
    console.log("error");
  }
};
