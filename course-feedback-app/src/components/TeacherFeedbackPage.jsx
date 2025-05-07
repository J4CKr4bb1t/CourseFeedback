import React, { useEffect, useState } from "react";
import { Bargraph1 } from "./EasyBar";
import { Bargraph2 } from "./PaceBar";
import "./TeacherFeedbackPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { paletteColors } from "./palette";

const TeacherFeedbackPage = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/feedback/${lessonId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("⚙️ fetched feedback payload:", data);
        setFeedbackList(data);
      })
      .catch(console.error);
  }, [lessonId]);

  
  // ensure we always have an array before filtering
  const list = Array.isArray(feedbackList) ? feedbackList : [];

  // labels in the same order as your charts
  const clarityLabels = [
    "Very unclear",
    "A little unclear",
    "Neutral",
    "A little clear",
    "Very clear",
  ];
  const paceLabels = ["Too Slow", "Just Right", "Too Fast"];

  // count occurrences of each label
  const clarityCounts = clarityLabels.map((lbl) =>
    list.filter((f) => f.contentClarity === lbl).length
  );
  const paceCounts = paceLabels.map((lbl) =>
    list.filter((f) => f.pace === lbl).length
  );

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

      {/* Content */}
      <div
        className="feedback-page"
        style={{ backgroundColor: "#F5F5F5", height: "100vh" }}
      >
        <div className="content">
          <div className="question">
            <h2>1. Was the content easy to understand?</h2>
            <div className="graph-container">
              <Bargraph1 data={clarityCounts} />
            </div>
          </div>

          <div className="question">
            <h2>2. Was the lesson an appropriate pace?</h2>
            <div className="graph-container">
              <Bargraph2 data={paceCounts} />
            </div>
          </div>

          <div className="question">
            <h2>3. Any anonymous suggestions?</h2>
            {list.length === 0 ? (
              <p>No suggestions yet.</p>
            ) : (
              list.map((f, i) => (
                <p key={i} className="student-name">
                  • {f.suggestions}
                </p>
              ))
            )}
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
