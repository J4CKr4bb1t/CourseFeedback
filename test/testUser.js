const mongoose = require("mongoose");
const User = require("../models/user"); // Adjust path accordingly

//Run using node test/testUser.js

// Function to test schema without connecting to a DB (unsure how to set up DB for multiple people to access)
//made it a method in case we want to call all the tests in one big master test file, but probably not needed
function testUserSchema() {
  // Create a valid user instance
  const testUser = new User({
    email: "test@example.com",
    first_name: "John",
    last_name: "Doe",
    type: "student",
  });

  // Test virtual property
  console.log("Full Name:", testUser.name); // Expected: "John, Doe"
  console.log("Type:", testUser.type);
  console.log("email:", testUser.email);
}

// Run test
testUserSchema();
