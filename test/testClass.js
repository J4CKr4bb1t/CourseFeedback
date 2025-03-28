const mongoose = require("mongoose");
const Class = require("../models/class"); // Adjust path accordingly

//Run using node test/testClass.js

// Function to test schema without connecting to a DB (unsure how to set up DB for multiple people to access)
//made it a method in case we want to call all the tests in one big master test file, but probably not needed
function testClassSchema() {
  // Create a valid user instance
  const testClass = new Class({
    // CONSTRUCTOR CODE HERE!!!
    name: "Intro to Biology", 
    abbrev: "BIO 101",
    prof: "Adams, John",
  });

  // Test virtual property
  //console.log("Full Name:", validUser.name);
  console.log("Display Name:", testClass.displayName);
  console.log("Professor:", testClass.prof);
  console.log("Name:", testClass.name");
  // ADD OTHER CONSOLE LOG TESTS HERE!!!
}

// Run test
testClassSchema();
