import logo from "./logo.svg";
import "./App.css";
import { CourseList } from "./components/CourseList";
import { LessonList } from "./components/LessonList";
import LoginForm from "./components//LoginForm";
import EditProfileStudent from "./components/EditProfileStudent";
import EditProfileProf from "./components/EditProfileProf";
function App() {
  return (
    <div className="App">
    {/* Render the EditProfile component */}
    <LoginForm />
  </div>);
/*<div className="App">
      <LoginForm />
    </div>  );*/
}


    /* This is the CourseList element.

    <div className="Container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <CourseList></CourseList>
        </div>
        <div className="col-md-1"></div>
      </div>

      {/* this is what loads in the lessonList *//*
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <LessonList></LessonList>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>*/

export default App;
