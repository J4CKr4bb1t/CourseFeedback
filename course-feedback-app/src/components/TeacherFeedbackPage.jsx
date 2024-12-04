import React from "react";
import { Bargraph1 } from "./EasyBar";
import { Bargraph2 } from "./PaceBar";
import LoginNavBar from "./NavBar";
import "./TeacherFeedbackPage.css"; 

const TeacherFeedbackPage = () => {
  return (
    <div className="feedback-page">
      <LoginNavBar title="BIO 101 Lesson 4 Feedback" />

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

      <div className="footer">
        <button className="download-button">Download Feedback</button>
      </div>
    </div>
  );
};

export default TeacherFeedbackPage;
