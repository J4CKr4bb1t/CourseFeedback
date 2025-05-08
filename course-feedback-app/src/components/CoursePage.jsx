import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";
import { CourseList } from "./CourseList";

const CoursePage = () => {
  const navigate = useNavigate();

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
          // Navigate to Course List
          onClick={() => navigate("/course-list")}
        >
          <i className="bi bi-house"></i>
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
          Course List
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
      <br></br>
      <CourseList />
    </div>
  );
};
export default CoursePage;
