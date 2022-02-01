const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets/index");
const { json } = require("express");

module.exports = (req, res, next) => {
  const token = req.headers?.authorization;

  if (token) {
    jwt.verify(token, JWT_SECRET, (err) => {
      if (err) {
        res.status(403).json({ message: "Your token sucks", err: err });
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({ message: "Missing token" });
  }
};
