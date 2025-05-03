import React, { Component } from "react";
//import { getCourse, getCourses } from "../services/CourseService";
import FeedbackButton from "./FeedbackButton";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
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
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found.");
      return;
    }

    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      console.error("Invalid token:", err);
      return;
    }

    const studentId = decoded._id;

    fetch("http://localhost:3000/class")
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.filter((course) =>
          course.students.includes(studentId)
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
