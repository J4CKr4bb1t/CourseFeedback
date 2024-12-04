import React from "react";
import { Bargraph1 } from "./EasyBar";
import { Bargraph2 } from "./PaceBar";
import "./TeacherFeedbackPage.css"; 
import { useNavigate } from "react-router-dom";
import { paletteColors } from "./palette";

const TeacherFeedbackPage = () => {
   const navigate = useNavigate(); 
  return (
    <div className="feedback-page" style={{ backgroundColor: "#F5F5F5", height: "100vh" }}>
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
          // Navigate to Professor lesson list
        onClick={() => navigate("/lesson-list-prof")} 
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        {/* update Title */} 
        <h1 style={{ margin: 0, color: paletteColors.navy, fontSize: "1.5rem" }}>
          Feedback
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
            onClick={() => navigate("/")} 
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
            onClick={() => navigate("/edit-profile-prof")} 
          >
            <i className="bi bi-person-fill" style={{ color: paletteColors.navy }}></i>
          </button>
        </div> 
      </header>

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
            placeholder="Enter text here..."
            className="feedback-input"
          ></textarea>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <button className="download-button">Download Feedback</button>
      </div>
    </div>
  );
};

export default TeacherFeedbackPage;
