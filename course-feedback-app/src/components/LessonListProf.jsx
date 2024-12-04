import React, { Component } from "react";
import { getCourse, getCourses, getLessons } from "../services/CourseService";
import FeedbackButton from "./FeedbackButton";
import LessonButton from "./LessonBtn";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";
import "../App.css";

export class LessonListProf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: getLessons(),
    };
  }

  render() {
    return (
      <div className="list-box">
        {this.state.lessons.map((lesson, index) => (
          <div className="row course-row">
            <div className="col-md-2">
              <h1 className="cl">Lesson {index + 1}</h1>
            </div>
            <div className="col-md-4">
              <h3 className="cl">{lesson.name}</h3>
            </div>
            <div className="col-md-4">
              <h3 className="cl">{lesson.date}</h3>
            </div>
            <div className="col-md-2">
              <LessonButton status="PROF" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
