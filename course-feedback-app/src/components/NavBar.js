import React from "react";
import { useNavigate } from "react-router-dom";
import { paletteColors } from "./palette"; 

const NavBar = ({ title = "Course Feedback" }) => {
  const navigate = useNavigate();

  return (
    <header
      style={{
        backgroundColor: paletteColors.yorkBlue,
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: paletteColors.navy,
      }}
    >
      <button
        style={{
          border: "none",
          background: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: paletteColors.navy,
        }}
        onClick={() => navigate(-1)} 
      >
        <i className="bi bi-arrow-left"></i> 
      </button>

      <h1 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}>
        {title}
      </h1>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
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
          onClick={() => navigate("/edit-profile-student")} 
        >
          <i className="bi bi-person-fill" style={{ color: paletteColors.navy }}></i>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
