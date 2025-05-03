const mongoose = require("mongoose");
const User = require("../models/user");

describe("User Schema Test", () => {
  it("User was created successfully", async () => {
    //create a new lesson
    const testUser = new User({
      email: "test@quinnipiac.edu",
      first_name: "John",
      last_name: "Doe",
      type: "student",
    });

    //assertions of what is expected in the test results
    expect(testUser.email).toBe("test@quinnipiac.edu");
    expect(testUser.first_name).toBe("John");
    expect(testUser.last_name).toBe("Doe");
    expect(testUser.type).toBe("student");
  });
});
