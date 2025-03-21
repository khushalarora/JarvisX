import jwt from "jsonwebtoken";
import User from "../models/User.js";

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token)
      return res.status(403).json({
        message: "Please login !",
      });

    const decodedObj = jwt.verify(token, process.env.login_secret_key);

    req.user = await User.findById(decodedObj._id);

    next();
  } catch (error) {
    res.status(500).json({
      message: "Login Again !",
    });
  }
};

export default isAuth;