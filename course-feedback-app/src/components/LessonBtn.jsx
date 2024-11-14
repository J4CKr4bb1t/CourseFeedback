import React from "react";

const LessonButton = (props) => {
  switch (props.status) {
    case "complete":
      return (
        <button type="button" className={props.status + " btn lesson-btn"}>
          <h3 className="btn-txt b1 "> EDIT FEEDBACK</h3>
        </button>
      );
      break;

    case "available":
      return (
        <button type="button" className={props.status + " btn lesson-btn"}>
          <h3 className="btn-txt b1 "> SUBMIT FEEDBACK</h3>
        </button>
      );
      break;

    case "unavailable":
      return (
        <button type="button" className={props.status + " btn lesson-btn"}>
          <h3 className="btn-txt b1 disabled"> UNAVAILABLE</h3>
        </button>
      );
      break;

    default:
      return (
        <button type="button" className=" btn btn-disabled">
          <h3 className="btn-txt b1 "> ERROR</h3>
        </button>
      );
      break;
  }
};

export default LessonButton;
