import React from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

//default value for status
let status = "unavailable";

const LessonButton = ({ status, lessonId, feedback, courseId }) => {
  const navigate = useNavigate();

  const handleEditFeedback = () => {
    navigate(`/feedback/${lessonId}`, {
      state: { feedback: feedback || {}, isEditing: true },
    });
  };

  const checkStatus = () => {
    //get studentID from token
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found.");
      return;
    }

    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      console.error("Invalid token:", err);
      return;
    }

    const studentId = decoded._id;
    //check if feedback contains any entries from the studentId
    if (feedback === undefined) return "available";
    feedback.forEach((entry) => {
      if (entry.user === studentId) return "complete";
    });
    return "available";
  };

  const handleSubmitFeedback = () => {
    console.log("submit: ", courseId, lessonId);

    navigate(`/feedback/${lessonId}`, {
      state: {
        isEditing: false,
        courseId: courseId,
        lessonId: lessonId,
        feedback: feedback,
      },
    });
  };

  console.log("feedback:", feedback);

  status = checkStatus();

  switch (status) {
    case "complete":
      return (
        <button
          type="button"
          className="btn btn-edit-feedback"
          onClick={handleEditFeedback}
        >
          EDIT FEEDBACK
        </button>
      );
      break;

    case "available":
      return (
        <button
          type="button"
          className="btn-submit-feedback"
          onClick={handleSubmitFeedback}
        >
          SUBMIT FEEDBACK
        </button>
      );
      break;

    case "PROF":
      return (
        <button type="button" className={"available " + " btn lesson-btn"}>
          <h3 className="btn-txt b1 "> VIEW FEEDBACK</h3>
        </button>
      );
      break;

    case "unavailable":
      return (
        <button type="button" className="btn-unavailable-btn" disabled>
          UNAVAILABLE
        </button>
      );
      break;

    default:
      return (
        <button type="button" className="btn btn-disabled">
          ERROR
        </button>
      );
      break;
  }
};

export default LessonButton;
