import React from "react";
import { useNavigate } from "react-router-dom";

const LessonButton = ({ status, lessonId, feedback }) => {
  const navigate = useNavigate();

  const handleEditFeedback = () => {
    navigate(`/feedback/${lessonId}`, {
      state: { feedback: feedback || {}, isEditing: true }, 
    });
  };

  const handleSubmitFeedback = () => {
    navigate(`/feedback/${lessonId}`, {
      state: { isEditing: false }, 
    });
  };

  switch (status) {
    case "complete":
      return (
        <button type="button" className="btn btn-edit-feedback"
          onClick={handleEditFeedback}>
           EDIT FEEDBACK 
        </button>
      );
      break;

    case "available":
      return (
        <button type="button" className="btn-submit-feedback"
          onClick={handleSubmitFeedback}>
             SUBMIT FEEDBACK
        </button>
      );
      break;

    case "unavailable":
      return (
        <button type="button" className="btn-unavailable-btn"
        disabled>
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
