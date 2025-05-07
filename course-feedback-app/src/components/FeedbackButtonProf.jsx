import React from "react";
import { useNavigate } from "react-router-dom";

const FeedbackButtonProf = ({ courseId }) => {
  const navigate = useNavigate();

  const handleViewLessons = () => {
    navigate(`/lesson-list-prof/${courseId}`);
  };

  return (
    <button
      type="button"
      className="btn btn-view-lessons cl"
      onClick={handleViewLessons}
   > 
      <h3 className="btn-txt b1">VIEW LESSONS</h3>
    </button>
  );
};

export default FeedbackButtonProf;
