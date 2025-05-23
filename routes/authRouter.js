const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const token = require('./tokenRouter'); 

// Minimal login — match user by email/password
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, error } = await new Promise((resolve,reject) => {
      User.authenticate()(email, password, (err, user) => {
        if (err || !user) {
          reject({ error: err || "Invalid email or password" });
        } else {
          resolve({ user });
        }
      });
    });

    if (error) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const authToken = token.getToken(user);

    res
      .status(200)
      .header("x-access-token", authToken)
      .header("access-control-expose-headers", "x-access-token")
      .json({ message: "Login successful", user, token: authToken });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//new user
router.post("/login/create", async (req, res) => {
  const { first_name, last_name, type, email, password } = req.body;

  const newUser = new User({ first_name, last_name, type, email });

  User.register(newUser, password, (err, savedUser) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    const authToken = token.getToken(savedUser); //generates JWT token

    res
      .status(201)
      .header("x-access-token", authToken)
      .header("access-control-expose-headers", "x-access-token")
      .json({ message: "User created", user: savedUser, token: authToken });
  });
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id, // ID from URL
      req.body, // Fields to update
      { new: true } // Return the updated document
    );

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// GET all users
router.get("/all-Users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/update-credentials", async (req, res) => {
  const { currentEmail, newEmail, newPassword } = req.body;

  try {
    //find the user by their current email
    const user = await User.findOne({ email: currentEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    //update the email if a new one is provided
    if (newEmail) {
      user.email = newEmail;
    }

    //update the password if a new one is provided
    if (newPassword) {
      await user.setPassword(newPassword);
    }

    //save the updated user
    await user.save();

    res.status(200).json({ message: "Credentials updated successfully." });
  } catch (err) {
    console.error("Error updating credentials:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
