import React, { Component } from "react";
import FeedbackButtonProf from "./FeedbackButtonProf";
import { jwtDecode } from "jwt-decode";
import { getAllClasses } from "../services/CourseService";
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
    //get JWT token from local storage
    const token = localStorage.getItem("token");

    //if no token is found, log error
    if (!token) {
      console.error("No token found.");
      return;
    }

    let decoded;
    try {
      //get/decode token from user info
      decoded = jwtDecode(token);
    } catch (err) {
      //if the token is not valid, log error
      console.error("Invalid token:", err);
      return;
    }

    //get prof id from token
    const professorId = decoded._id;

    //get all classes from db
    /*fetch("http://localhost:3000/class")
      .then((res) => res.json())
      .then((data) => {
        //get class taught by prof
        const filteredData = data.filter((course) =>
          course.professors.includes(professorId)
        );
  
        //load their classes
        this.setState({ courses: filteredData });
      }) */
    getAllClasses()
      .then((all) =>
        all.filter((course) => course.professors.includes(professorId))
      )
      .then((filtered) => this.setState({ courses: filtered }))
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }

  render() {
    return (
      <div className="list-box">
        {this.state.courses.map((course, index) => (
          <div key={course._id} className="row course-row">
            <div className="col-md-2">
              <h1 className="cl">{course.abbrev}</h1>
            </div>
            <div className="col-md-4">
              <h3 className="cl">{course.name}</h3>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-2">
              <FeedbackButtonProf courseId={course._id} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
