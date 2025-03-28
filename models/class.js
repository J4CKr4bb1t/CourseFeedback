var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ClassSchema = Schema({
  //CLASS SCHEMA CONSTRUCTORS HERE
  name: { type: String, required: true, maxLength: 100 },
  abbrev: { type: String, required: true, maxLength: 20 },
  prof: { type: String, required: true, maxLength: 100 },
});

// Virtual for user's full name
//DERIVED attribute- full display name

ClassSchema.virtual("displayName").get(function () {
  return '${this.abbrev} - ${this.name}';
});

//Export model
module.exports = mongoose.model("Class", ClassSchema);
