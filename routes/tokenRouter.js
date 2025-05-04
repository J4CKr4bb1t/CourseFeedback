const jwt = require("jsonwebtoken");
const config = require("../config");

exports.getToken = (user) => {
  return jwt.sign(
    { _id: user._id, email: user.email, type: user.type },
    config.secretKey,
    { expiresIn: 3600 } //expires in 1 hour
  );
};

exports.verifyUser = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Authentication failed." });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(403).json({ message: "No token provided." });
  }
};
