import React, { Component } from "react";
import { getCourse, getCourses } from "../services/CourseService";
import FeedbackButtonProf from "./FeedbackButtonProf";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";
import "../App.css";

export class CourseListProf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: getCourses(),
    };
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
              <FeedbackButtonProf />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
