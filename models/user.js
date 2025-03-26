var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = Schema({
  email: { type: String, required: true, max: 100 },
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  type: { type: String, required: true },
});

// Virtual for user's full name
//DERIVED attribute
UserSchema.virtual("name").get(function () {
  return this.first_name + ", " + this.last_name;
});

//Export model
module.exports = mongoose.model("User", UserSchema);
