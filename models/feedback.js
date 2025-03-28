var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FeedbackSchema = Schema({
  //FEEDBACK SCHEMA CONSTRUCTORS HERE
  lesson: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true},
  contentClarity: {
    type: String, 
    enum: ["Very unclear", "A little unclear", "Neutral", "A little clear", "Very clear"],
    required: true, 
  }, 
  pace: {
    type: String, 
    enum: ["Too Slow, Just Right, Too Fast"],
    required: true,
  },
  suggestions: { type: String, maxLength: 1000 },
  submittedAt: { type: Date, default: Date.now },
});

// Virtual for user's full name
//DERIVED attribute- is there anything for the lesson that is DERIVED By the constructor information?

FeedbackSchema.virtual("summary").get(function () {
  return '${this.contentClarity}, ${this.pace}';
});

//Export model
module.exports = mongoose.model("Feedback", FeedbackSchema);
