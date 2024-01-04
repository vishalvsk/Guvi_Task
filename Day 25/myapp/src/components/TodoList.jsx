import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
