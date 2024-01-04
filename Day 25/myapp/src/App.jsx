import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (id, updatedTitle, updatedDescription, isCompleted) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: updatedTitle,
            description: updatedDescription,
            completed: isCompleted,
          }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-app">
      <div className="todo-section">
        <p>My Todo</p>
        <TodoForm addTask={addTask} />
      </div>
      <div className="tasks-section">
        <h2>My Todos</h2>
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default TodoApp;
