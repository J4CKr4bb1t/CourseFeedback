const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Minimal login — match user by email
router.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid email" });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login/create", async (req, res) => {
  const { first_name, last_name, type, email } = req.body;

  const newUser = new User({ first_name, last_name, type, email });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
