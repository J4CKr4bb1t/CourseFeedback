import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./FeedbackPage.css";
import { paletteColors } from "./palette";

const FeedbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const lessonId = location.state?.lessonId;
  const courseId = location.state?.courseId;

  const isEditing = location.state?.isEditing;

  const initialFeedback = location.state?.feedback || {};

  const [contentClarity, setContentClarity] = useState("");
  const [pace, setPace] = useState("");
  const [suggestions, setSuggestions] = useState("");

  useEffect(() => {
    if (isEditing) {
      setContentClarity(initialFeedback.contentClarity || "");
      setPace(initialFeedback.pace || "");
      setSuggestions(initialFeedback.suggestions || "");
    }
  }, [isEditing, initialFeedback]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO change from console log to DB post/put
    console.log({
      isEditing,
      lessonId,
      courseId,
      contentClarity,
      pace,
      suggestions,
    });
    alert(
      isEditing
        ? "Feedback updated successfully!"
        : "Feedback submitted successfully!"
    );
    navigate(`/lessons/${courseId}`);
  };

  return (
    <div className="w100">
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
          // Navigate to lesson List
          onClick={() => navigate("/lessons")}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        {/*Title */}
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

        {/* Logout and Profile Icons */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
            style={{
              border: "none",
              background: "none",
              color: paletteColors.navy,
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
            // Navigate to Login Form
            onClick={() => navigate("/")}
          >
            <i className="bi bi-box-arrow-right"></i> {/* Logout Icon */}
          </button>
        </div>
      </header>

      <div className="container mt-4">
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="feedback-question">
            <h3>Q1: Was the lesson content clear and easy to understand?</h3>
            <div className="feedback-options blue-box">
              {[
                "Very unclear",
                "A little unclear",
                "Neutral",
                "A little clear",
                "Very clear",
              ].map((option, index) => (
                <label key={index} className="feedback-option">
                  <input
                    type="radio"
                    name="contentClarity"
                    value={option}
                    checked={contentClarity === option}
                    onChange={(e) => setContentClarity(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className="feedback-question">
            <h3>
              Q2: Was the pace of the lesson appropriate for your understanding?
            </h3>
            <div className="feedback-options blue-box">
              {["Too Slow", "Just Right", "Too Fast"].map((option, index) => (
                <label key={index} className="feedback-option">
                  <input
                    type="radio"
                    name="pace"
                    value={option}
                    checked={pace === option}
                    onChange={(e) => setPace(e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div className="feedback-question">
            <h3>Q3: Do you have any suggestions to improve the lesson?</h3>
            <textarea
              placeholder="Enter text here..."
              value={suggestions}
              onChange={(e) => setSuggestions(e.target.value)}
              className="feedback-textarea"
            />
          </div>
          <div className="d-flex justify-content-end gap-3">
            <button
              type="submit"
              className={`btn ${
                isEditing ? "btn-edit-feedback" : "btn-submit-feedback"
              }`}
            >
              {isEditing ? "Update Feedback" : "Submit Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
