import React from "react";
import TodoTask from "./TodoTask.jsx";
import tasks from "./tasks.js";

export default function CheckboxList() {
  //Array de tarefas deve ser passado como parâmetro
  const loadTasks = (tasks) =>
    tasks.map((task) => <TodoTask taskName={task} />);

  return <div>{loadTasks(tasks)}</div>;
}
