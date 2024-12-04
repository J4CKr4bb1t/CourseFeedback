import React, { Component } from "react";
import { getLessons } from "../services/CourseService";
import LessonButton from "./LessonBtn";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";
import "../App.css";

export class LessonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: getLessons(),
    };
  }

  render() {
    return (
      <div className="list-box">
        <NavBar title="Lessons" />

        {this.state.lessons.map((lesson, index) => (
          <div className="row course-row" key={lesson.id}>
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
              <LessonButton
                status={lesson.status}
                lessonId={lesson.id}
                feedback={lesson.feedback}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LessonList;