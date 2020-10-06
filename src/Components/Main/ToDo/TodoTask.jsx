import React from "react";

export default function Checkbox(props) {
  const { task } = props.taskName;

  function handleCheckbox(event) {
    event.target.parentNode.style.textDecoration = "line-through";
  }
  return (
    <div>
      <input
        key={task.id}
        type="checkbox"
        className="checkbox"
        onClick={handleCheckbox}
      />
      <span>{task}</span>
    </div>
  );
}
