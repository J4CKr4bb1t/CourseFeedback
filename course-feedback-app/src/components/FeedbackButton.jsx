import React from "react";
import { useNavigate } from 'react-router-dom';

const FeedbackButton = ({ courseId }) => {
const navigate = useNavigate();

  const handleViewLessons = () => {
    navigate("/lessons", { state: { courseId } });
  }; 

  return (
    <button 
      type="button" 
      className="btn btn-view-lessons cl" 
      onClick={handleViewLessons}> 

      <h3 className="btn-txt b1">VIEW LESSONS</h3>
    </button>
  );
};

export default FeedbackButton;