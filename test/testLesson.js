const mongoose = require("mongoose");
const Lesson = require("../models/lesson"); // Adjust path accordingly

//Run using node test/testLesson.js

// Function to test schema without connecting to a DB (unsure how to set up DB for multiple people to access)
//made it a method in case we want to call all the tests in one big master test file, but probably not needed
function testUserSchema() {
  // Create a valid user instance
  const testLesson = new Lesson({
    // CONSTRUCTOR CODE HERE!!!
  });

  // Test virtual property
  //console.log("Full Name:", validUser.name);
  // ADD OTHER CONSOLE LOG TESTS HERE!!!
}

// Run test
testLessonSchema();
