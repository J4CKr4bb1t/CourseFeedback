import React, { Component } from "react";
import { getLessons } from "../services/CourseService";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ViewFeedbackButton = ({ lessonId }) => {
  const navigate = useNavigate();

  const handleViewFeedback = () => {
    navigate(`/teacher-feedback/${lessonId}`);
  };

  return (
    <button onClick={handleViewFeedback} className="btn btn-primary" style={{
      backgroundColor: "#FFB81C", 
      border: "none",
      color: "black",
      padding: "15px 20px",
      fontSize: "1.2rem",
      borderRadius: "25px",
      cursor: "pointer",
      textAlign: "center",
    }}>
      View Feedback
    </button>
  );
};

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
              <ViewFeedbackButton lessonId={lesson.id} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
