const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
require("dotenv").config();

const userRoute = express.Router();

// User Signup -->

userRoute.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const saltRounds = Number(process.env.SALT_ROUNDS);
  try {
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ msg: "The user already exists" });
    }
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const newUser = UserModel({ name, email, password: hashedPass });
    await newUser.save();
    res.status(201).json({ success: true, msg: "User Signup Successful!" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

// User Login -->

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "The user does not exists" });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ msg: "Invalid Password" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.SECRET_KEY
    );

    res.status(200).json({ msg: "Login Successful", token });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = { userRoute };
