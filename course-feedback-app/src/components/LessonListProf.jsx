// src/components/LessonListProf.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getClassById } from "../services/CourseService";
import "../App.css";
import { paletteColors } from "./palette";

export default function LessonListProf() {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getClassById(courseId)
      .then((cls) => {
        // backend returns populated lessons array
        setLessons(cls.lessons);
      })
      .catch((err) => console.error("Failed to load lessons:", err));
  }, [courseId]);

  return (
    <div className="w100">
      {/* Header (same style as CoursePageProf) */}
      <header
        style={{
          backgroundColor: paletteColors.yorkBlue,
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Back to courses */}
        <button
          style={{
            border: "none",
            background: "none",
            fontSize: "2rem",
            cursor: "pointer",
            color: paletteColors.navy,
          }}
          onClick={() => navigate("/course-list-prof")}
        >
          <i className="bi bi-arrow-left"></i>
        </button>

        <h1
          style={{
            margin: 0,
            color: paletteColors.navy,
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Lesson List
        </h1>

        {/* Logout */}
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
      </header>

      <div className="list-box">
        {lessons.map((lesson) => (
          <div key={lesson._id} className="row course-row">
            <div className="col-md-2">
              <h1 className="cl">Lesson {lesson.number}</h1>
            </div>
            <div className="col-md-4">
              <h3 className="cl">{lesson.name}</h3>
            </div>
            <div className="col-md-4">
              <h3 className="cl">
                {new Date(lesson.date).toLocaleDateString()}
              </h3>
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-view-lessons cl"
                style={{
                  backgroundColor: "#FFB81C",
                  border: "none",
                  color: "black",
                  padding: "10px 15px",
                  fontSize: "1rem",
                  borderRadius: "25px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigate(`/teacher-feedback/${lesson._id}`)
                }
              >
                <h3 className="btn-txt b1">VIEW FEEDBACK</h3>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
