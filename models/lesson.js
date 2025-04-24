var mongoose = require("mongoose");
const feedback = require("./feedback");

var Schema = mongoose.Schema;

var LessonSchema = Schema({
  //LESSON SCHEMA CONSTRUCTORS HERE
  number: { type: Number, required: true },
  name: { type: String, required: true, maxLength: 500 },
  date: { type: Date, required: true },
  feedback: { type: Schema.Types.ObjectId, ref: "Feedback", required: false },
});

// Virtual for user's full name
//DERIVED attribute- is there anything for the lesson that is DERIVED By the constructor information?

//Lesson title derived attribute
LessonSchema.virtual("lessonTitle").get(function () {
  return `Lesson ${this.number}: ${this.name}`;
});

//Export model
module.exports = mongoose.model("Lesson", LessonSchema);
