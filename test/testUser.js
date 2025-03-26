const mongoose = require("mongoose");
const User = require("../models/user"); // Adjust path accordingly

//Run using node test/testUser.js

// Function to test schema without connecting to a DB (unsure how to set up DB for multiple people to access)
function testUserSchema() {
  // Create a valid user instance
  const validUser = new User({
    email: "test@example.com",
    first_name: "John",
    last_name: "Doe",
    type: "student",
  });

  // Test virtual property
  console.log("Full Name:", validUser.name); // Expected: "John, Doe"
  console.log("Type:", validUser.type);
  console.log("email:", validUser.email);

  // Validate without saving
  const validationError = validUser.validateSync();
  if (validationError) {
    console.error("Validation Error:", validationError);
  } else {
    console.log("Valid user passed validation ✅");
  }
}

// Run test
testUserSchema();
