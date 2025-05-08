import React, { Component, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLessons } from "../services/CourseService";
import LessonButton from "./LessonBtn";
import { paletteColors } from "./palette";
import "../App.css";
import { getClassById } from "../services/CourseService";

export default function LessonList() {
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
    <div className="list-box">
      {lessons.map((lesson) => (
        <div className="row course-row" key={lesson._id}>
          <div className="col-md-2">
            <h1 className="cl">Lesson {lesson.number}</h1>
          </div>
          <div className="col-md-4">
            <h3 className="cl">{lesson.name}</h3>
          </div>
          <div className="col-md-4">
            <h3 className="cl">{new Date(lesson.date).toLocaleDateString()}</h3>
          </div>
          <div className="col-md-2">
            <LessonButton
              lessonId={lesson._id}
              feedback={lesson.feedback}
              courseId={courseId}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
