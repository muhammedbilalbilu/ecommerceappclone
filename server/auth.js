
const express = require("express");
const authRouter = express.Router();
const User = require("./model/user")
const bcryptjs = require('bcryptjs');




authRouter.post("/api/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ msg: "User with same email already exists!" });
      }
  
     hashedpassword = await bcryptjs.hash(password , 8);
  
      let user = new User({
        email,
        password : hashedpassword,
        name,
      });
      user = await user.save();
      res.json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  module.exports = authRouter;