import logo from "./logo.svg";
import "./App.css";
import { CourseList } from "./components/CourseList";
import { LessonList } from "./components/LessonList";
import LoginForm from "./components//LoginForm";
import EditProfileStudent from "./components/EditProfileStudent";
import EditProfileProf from "./components/EditProfileProf";
import { Bargraph1 } from "./components/EasyBar";
import { Bargraph2 } from "./components/PaceBar";

function App() {
  return (
    <div className="App">
      {/* Render the EditProfile component */}
      <LoginForm />
    </div>
  );
  /*<div className="App">
      <LoginForm />
    </div>  );*/
}

export default App;
