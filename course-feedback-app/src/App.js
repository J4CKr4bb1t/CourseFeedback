import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CourseList } from "./components/CourseList";
import { LessonList } from "./components/LessonList";
import LoginForm from "./components//LoginForm";
import EditProfileStudent from "./components/EditProfileStudent";
import EditProfileProf from "./components/EditProfileProf";
import { Bargraph1 } from "./components/EasyBar";
import { Bargraph2 } from "./components/PaceBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./components/CoursePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Login Page */}
        <Route path="/" element={<LoginForm />} />

        {/* Student Profile Page */}
        <Route path="/edit-profile-student" element={<EditProfileStudent />} />

        {/* Professor Profile Page */}
        <Route path="/edit-profile-prof" element={<EditProfileProf />} />

        {/* Course List Page */}
        <Route path="/course-list" element={<CoursePage />} />

        {/* Lesson List Page */}
        <Route path="/lesson-list" element={<LessonList />} />
      </Routes>
    </Router>
  );
}

export default App;
