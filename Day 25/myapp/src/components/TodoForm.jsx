import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
          />
          
      <button type="submit" className="addTodo">Add Todo</button>
    </form>
  );
};

export default TodoForm;
