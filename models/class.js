var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ClassSchema = Schema({
  //CLASS SCHEMA CONSTRUCTORS HERE
  //   email: { type: String, required: true, max: 100 },
  //   first_name: { type: String, required: true, max: 100 },
  //   last_name: { type: String, required: true, max: 100 },
  //   type: { type: String, required: true },
});

// Virtual for user's full name
//DERIVED attribute- is there anything for the lesson that is DERIVED By the constructor information?

//Full name example derived attribute
// UserSchema.virtual("name").get(function () {
//   return this.first_name + ", " + this.last_name;
// });

//Export model
module.exports = mongoose.model("Class", ClassSchema);
