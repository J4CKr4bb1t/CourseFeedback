// src/components/TeacherFeedbackPage.jsx
import React from "react";
import { Bargraph1 } from "./EasyBar";
import { Bargraph2 } from "./PaceBar";
import "./TeacherFeedbackPage.css";
import { useNavigate } from "react-router-dom";
import { paletteColors } from "./palette";

const TeacherFeedbackPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w100">
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
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        {/* Title */}
        <h1
          style={{
            margin: 0,
            color: paletteColors.navy,
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Feedback
        </h1>

        {/* Logout Icon */}
        <button
          style={{
            border: "none",
            background: "none",
            color: paletteColors.navy,
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
          onClick={() => navigate("/")}
        >
          <i className="bi bi-box-arrow-right"></i>
        </button>
      </header>

      <div
        className="feedback-page"
        style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
      >
        {/* Content */}
        <div className="content">
          <div className="question">
            <h2>1. Was the content easy to understand?</h2>
            <div className="graph-container">
              <Bargraph1 />
            </div>
          </div>

          <div className="question">
            <h2>2. Was the lesson an appropriate pace?</h2>
            <div className="graph-container">
              <Bargraph2 />
            </div>
          </div>

          <div className="question">
            <h2>3. Do you have any suggestions to improve the lesson?</h2>
            <p className="student-name">STUDENT A</p>
            <textarea
              placeholder="I would like if the course moved a little quicker"
              className="feedback-input"
            ></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <button className="download-button">Download Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default TeacherFeedbackPage;
