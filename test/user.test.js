const User = require("../models/user");

const testUser = new User("test@qu.edu", "firstName", "lastName", "student");
console.log(testUser.lastname);

// describe("Person-Tests", () => {
//   let User;

//   beforeEach(() => {
//     user = new User();
//   });
//   test("GivenNewPerson_AllConditionsMet_ReturnsNewPerson", () => {
//     //Arrange
//     //beforeEach
//     //Act
//     //what we're trying to do
//     const testUser = new User(
//       "test@qu.edu",
//       "firstName",
//       "lastName",
//       "student"
//     );
//     //Assert
//     //how do I know that this person was created successefully?
//     expect(testUser.lastName.toString()).toBe("lastName");
//     expect(testUser.email.toString()).toBe("test@qu.edu");
//     expect(testUser.firstname.toString()).toBe("firstName");
//     expect(testUser.type.toString()).toBe("student");
//   });
// });
