import React, { Component } from "react";
//import { getCourse, getCourses } from "../services/CourseService";
import FeedbackButton from "./FeedbackButton";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";
import "../App.css";

export class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
    this.fetchCourses();
  }

  fetchCourses() {
    fetch("http://localhost:3000/class") // Replace with our URL for the fetch request
      .then((res) => res.json())
      .then((data) => {
        //use token to get ID of current prof/student.
        // 681124b8b92f0089800cc8fb John Doe ID
        //TODO get ID from token instead
        const targetStudentID = "681124b8b92f0089800cc8fb";

        const filteredData = data.filter((course) =>
          course.students.includes(targetStudentID)
        );

        this.setState({ courses: filteredData });
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }

  render() {
    return (
      <div className="list-box">
        {this.state.courses.map((course, index) => (
          <div className="row course-row">
            <div className="col-md-2">
              <h1 className="cl">{course.abbrev}</h1>
            </div>
            <div className="col-md-4">
              <h3 className="cl">{course.name}</h3>
            </div>
            <div className="col-md-4">
              <h3 className="cl">{course.prof}</h3>
            </div>
            <div className="col-md-2">
              <FeedbackButton />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
