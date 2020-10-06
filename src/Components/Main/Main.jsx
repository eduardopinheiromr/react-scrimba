import React from "react";
import TodoList from "./ToDo/TodoList";
import Title from "./Title/Title.jsx";
import "./style.css";

export default function Main() {
  return (
    <main className="Main">
      <Title />
      <TodoList />
    </main>
  );
}
