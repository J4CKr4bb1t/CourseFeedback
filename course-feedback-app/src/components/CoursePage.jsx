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
      <h1>HEADER</h1>
      <CourseList />
    </div>
  );
};
export default CoursePage;
