const mongoose = require("mongoose");
const Class = require("../models/class"); // Adjust path accordingly
const ObjectId = mongoose.Types.ObjectId; 

describe("Class Schema Test", () => {
  it("should create a class with all fields", () => {
    const testClass = new Class({
      name: "Intro to Biology",
      abbrev: "BIO 101",
      section: 1,
      professors: [new ObjectId()],
      students: [new ObjectId()],
      lessons: [new ObjectId()],
    });

    // Check the virtual
    expect(testClass.displayName).toBe("BIO 101 - Intro to Biology");

    // Check fields
    expect(testClass.name).toBe("Intro to Biology");
    expect(testClass.abbrev).toBe("BIO 101");
    expect(testClass.section).toBe(1);
    expect(testClass.professors[0]).toBeInstanceOf(ObjectId);
    expect(testClass.students[0]).toBeInstanceOf(ObjectId);
    expect(testClass.lessons[0]).toBeInstanceOf(ObjectId);
  });
});
