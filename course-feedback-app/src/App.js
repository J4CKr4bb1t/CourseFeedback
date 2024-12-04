import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CourseList } from "./components/CourseList";
import { LessonList } from "./components/LessonList";
import FeedbackPage from "./components/FeedbackPage";
import LoginForm from "./components//LoginForm";
import EditProfileStudent from "./components/EditProfileStudent";
import EditProfileProf from "./components/EditProfileProf";
import { Bargraph1 } from "./components/EasyBar";
import { Bargraph2 } from "./components/PaceBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherFeedbackPage from "./components/TeacherFeedbackPage";

 /*
 function App() { 
  return ( 
    <div> <TeacherFeedbackPage /> </div> 
    );
   } 
   */
  
function App() {
  return (
    /* <div className="App"> 
    {/* Render the EditProfile component } 
    <CourseList/> </div>); */

    <Router>
      <Routes>
        {/* Default Login Page */}
        <Route path="/" element={<LoginForm />} />

        {/* Student Profile Page */}
        <Route path="/edit-profile-student" element={<EditProfileStudent />} />

        {/* Professor Profile Page */}
        <Route path="/edit-profile-prof" element={<EditProfileProf />} />

        {/* Course List Page */}
        <Route path="/course-list" element={<CourseList />} />

        {/* Lesson List Page */}
        <Route path="/lesson-list" element={<LessonList />} />

        <Route path="/lessons" element={<LessonList />} />
        <Route path="/feedback" element={<TeacherFeedbackPage />} />
        <Route path="/feedback/:lessonId" element={<FeedbackPage />} />
      </Routes>
    </Router>

  );
}


export default App;
