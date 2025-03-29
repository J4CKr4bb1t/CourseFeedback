const mongoose = require('mongoose');
const Feedback = require('../models/feedback'); // Assuming the path is correct
const ObjectId = mongoose.Types.ObjectId; // Simulate existing references

//describe: creates test
describe("Feedback Schema Test", () => {
  //title test 
  it("feedback was created successfully", async () => {
    //create a new feedback
    const feedback = new Feedback({
      lesson: new ObjectId(), // used to simulate a lesson 
      user: new ObjectId(), // used to simulate a user 
      contentClarity: "Very clear",
      pace: "Just Right",
      suggestions: "Great pace, more examples would help.",
    });

    //assertions of what is expected in the test results
    expect(feedback.lesson).toBeInstanceOf(ObjectId);
    expect(feedback.user).toBeInstanceOf(ObjectId);
    expect(feedback.contentClarity).toBe("Very clear");
    expect(feedback.pace).toBe("Just Right");
    expect(feedback.suggestions).toBe("Great pace, more examples would help.");
  });

  //title test
  it("virtual function was ran successfully", async () => {
    //create a new feedback
    const feedback = new Feedback({
      lesson: new ObjectId(), // used to simulate a lesson 
      user: new ObjectId(), // used to simulate a user 
      contentClarity: "A little clear",
      pace: "Too Slow",
      suggestions: "Consider reducing the number of slides.",
    });

    //assertions of what is expected in the test results
    expect(feedback.summary).toBe('A little clear, Too Slow');
  });
});

//first install npm i --save-dev jest
//rename the test file to feedback.test.js   
// then use the command: npx jest feedback.test.js to run the test
