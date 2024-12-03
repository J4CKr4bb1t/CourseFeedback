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
        {/* Header */}
        <header
          style={{
            backgroundColor: paletteColors.yorkBlue,
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Back Button */}
          <button
            style={{
              border: "none",
              background: "none",
              fontSize: "2rem",
              cursor: "pointer",
              color: paletteColors.navy,
            }}
            // Navigate to Course List
            onClick={() => useNavigate("/")}
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          {/* Title */}
          <h1
            style={{ margin: 0, color: paletteColors.navy, fontSize: "1.5rem" }}
          >
            Edit Profile
          </h1>

          {/* Logout and Profile Icons */}
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button
              style={{
                border: "none",
                background: "none",
                color: paletteColors.navy,
                cursor: "pointer",
                fontSize: "1.5rem",
              }}
              // Navigate to Login Form
              onClick={() => useNavigate("/")}
            >
              <i className="bi bi-box-arrow-right"></i> {/* Logout Icon */}
            </button>
            <button
              style={{
                border: "none",
                background: "#FFCC5C",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              // Navigate to Edit Profile
              onClick={() => useNavigate("/edit-profile-prof")}
            >
              <i
                className="bi bi-person-fill"
                style={{ color: paletteColors.navy }}
              ></i>
            </button>
          </div>
        </header>

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
