import React, { Component } from "react";
// import { getCourse, getCourses } from "../services/CourseService";
import FeedbackButtonProf from "./FeedbackButtonProf";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";
import "../App.css";

export class CourseListProf extends Component {
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
        //TODO charlize
        const targetProfessorId = "123456789abcdef";

        const filteredData = data.filter((course) =>
          course.professors.includes(targetProfessorId)
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
            <div className="col-md-4"></div>
            <div className="col-md-2">
              <FeedbackButtonProf />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
