import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const LessonButton = ({ lessonId, feedback, courseId }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("unavailable");

  const handleEditFeedback = () => {
    navigate(`/feedback/${lessonId}`, {
      state: { isEditing: true, courseId: courseId, lessonId: lessonId },
    });
  };

  const handleSubmitFeedback = () => {
    console.log("submit: ", courseId, lessonId);

    navigate(`/feedback/${lessonId}`, {
      state: {
        isEditing: false,
        courseId: courseId,
        lessonId: lessonId,
      },
    });
  };

  const checkStatus = async (lessonID) => {
    // Get studentID from token
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found.");
      return "unavailable";
    }

    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      console.error("Invalid token:", err);
      return "unavailable";
    }

    const studentId = decoded._id;

    try {
      const response = await fetch(
        `http://localhost:3000/feedback/${lessonID}`
      );
      if (!response.ok) {
        console.error("Failed to fetch feedback:", response.statusText);
        return "unavailable";
      }

      const feedback = await response.json();

      if (!Array.isArray(feedback)) {
        console.error("Unexpected feedback format.");
        return "unavailable";
      }

      const hasFeedback = feedback.some((entry) => entry.user === studentId);
      return hasFeedback ? "complete" : "available";
    } catch (err) {
      console.error("Error fetching feedback:", err);
      return "unavailable";
    }
  };

  useEffect(() => {
    const getStatus = async () => {
      if (lessonId) {
        const result = await checkStatus(lessonId);
        setStatus(result);
      }
    };
    getStatus();
  }, [lessonId]);

  // console.log("feedback:", feedback);

  // status = checkStatus(lessonId);
  console.log("status", status);

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
