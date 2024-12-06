import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { paletteColors } from "./palette";
import { useNavigate } from "react-router-dom";
import { LessonList } from "./LessonList";

const LessonPage = () => {
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
          <i className="bi bi-arrow-left"></i>
        </button>

        {/* Title */}
        <h1
          style={{ margin: 0, color: paletteColors.navy, fontWeight: "bold", fontSize: "2rem" }}
        >
          Lesson List
        </h1>

         {/* Logout and Profile Icons */}
         <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button
            style={{
              border: "none",
              background: "#FFCC5C",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
             // Navigate to Edit Profile
             onClick={() => navigate("/edit-profile-student")} 
          >
            <i className="bi bi-person-fill" style={{ color:  paletteColors.navy }}></i> {/* Profile Icon */}
          </button>
          <button
            style={{
              border: "none",
              background: "none",
              color:  paletteColors.navy,
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
      <LessonList />
    </div>
  );
};
export default LessonPage;
