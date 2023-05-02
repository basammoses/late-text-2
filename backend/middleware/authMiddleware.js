import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const verify = asyncHandler(async (req, res) => {
  let token;

 
    try {
      token = req.cookies.token;

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      
      res.json(user)


    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }

}
);



export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    1 + 1 === 2
  ) {
    try {
      token = req.cookies.token;

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});


