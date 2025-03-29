const mongoose = require('mongoose');
const Lesson = require('../models/lesson'); 
const ObjectId = mongoose.Types.ObjectId; // Simulate an existing reference

//describe: creates test
describe("Lesson Schema Test", () => {
  //title test 
  it("lesson was created successfully", async () => {
    //create a new lesson 
    const lesson = new Lesson({
      number: 1,
      name: 'Understanding the basics',
      date: new Date('2024-10-11'),
      feedback: new ObjectId() //used to simulate feedback
    });

    //assertions of what is expected in the test results
    expect(lesson.number).toBe(1);
    expect(lesson.name).toBe('Understanding the basics');
    expect(lesson.date.toISOString()).toBe(new Date('2024-10-11').toISOString());
    expect(lesson.feedback).toBeInstanceOf(ObjectId);
  });
 //title test
  it("virtual function was ran successfully", async () => {
    //create a new lesson 
    const lesson = new Lesson({
      number: 1,
      name: 'Understanding the basics',
      date: new Date('2024-10-11'),
      feedback: new ObjectId() //used to simulate feedback
    });

    //assertions of what is expected in the test results
    expect(lesson.lessonTitle).toBe('Lesson 1:Understanding the basics');
  });
});
//first install npm i --save-dev jest
//rename the test file to lesson.test.js   
// then use the command: npx jest lesson.test.js to run the test 