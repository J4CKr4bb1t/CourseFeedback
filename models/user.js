var mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@quinnipiac\.edu$/, "Must be a quinnipiac.edu email"],
  },
  first_name: { type: String, required: true, max: 100 },
  last_name: { type: String, required: true, max: 100 },
  type: { type: String, enum: ["student", "professor","Student","Professor"], required: true },
});

//add plugin for passport
UserSchema.plugin(passportLocalMongoose, {usernameField: "email"});

// Virtual for user's full name
//DERIVED attribute
UserSchema.virtual("name").get(function () {
  return this.first_name + ", " + this.last_name;
});

//Export model
module.exports = mongoose.model("User", UserSchema);
