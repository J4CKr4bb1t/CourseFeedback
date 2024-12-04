import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./FeedbackPage.css";
import LoginNavBar from "./NavBar";

const FeedbackPage = () => {
  const { lessonId } = useParams(); 
  const location = useLocation(); 
  const navigate = useNavigate();

  const isEditing = location.state?.isEditing || false; 
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
    console.log({
      lessonId,
      contentClarity,
      pace,
      suggestions,
    });
    alert(isEditing ? "Feedback updated successfully!" : "Feedback submitted successfully!");
    navigate("/lessons");
  };

  return (
    <div className="feedback-page">
      <LoginNavBar title={`${isEditing ? "Edit Feedback" : "Submit Feedback"} for Lesson ${lessonId}`} />

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="feedback-question">
          <h3>Q1: Was the lesson content clear and easy to understand?</h3>
          <div className="feedback-options">
            {[" Very unclear", " A little unclear", " Neutral", " A little clear", " Very clear"].map((option, index) => (
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
          <h3>Q2: Was the pace of the lesson appropriate for your understanding?</h3>
          <div className="feedback-options">
            {[" Too Slow", " Just Right", " Too Fast"].map((option, index) => (
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
            placeholder=" Enter text here..."
            value={suggestions}
            onChange={(e) => setSuggestions(e.target.value)}
            className="feedback-textarea"
          />
        </div>
        <button type="submit" className="submit-button">
          {isEditing ? "Update Feedback" : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackPage;
