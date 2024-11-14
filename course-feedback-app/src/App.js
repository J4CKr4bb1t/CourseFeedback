import logo from "./logo.svg";
import "./App.css";
import { CourseList } from "./components/CourseList";
import { LessonList } from "./components/LessonList";

function App() {
  return (
    //This is the CourseList element.

    <div className="Container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <CourseList></CourseList>
        </div>
        <div className="col-md-1"></div>
      </div>

      {/* this is what loads in the lessonList */}
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <LessonList></LessonList>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}

export default App;
