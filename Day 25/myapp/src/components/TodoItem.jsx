import React, { useState } from "react";

const TodoItem = ({ task, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(task.id, editedTitle, editedDescription, isCompleted);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description);
    setIsEditing(false);
  };

  const handleCompletedToggle = () => {
    setIsCompleted(!isCompleted);
    updateTask(task.id, editedTitle, editedDescription, !isCompleted);
  };

  return (
    <div className={`todo-item ${isCompleted ? "completed" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>Name :- {task.title}</p>
          <p>Description :- {task.description}</p>
          <div className="separte">
            <p> Status :-</p>{" "}
            <button onClick={handleCompletedToggle}>
              {isCompleted ? "Completed" : "Not Completed"}
            </button>
          </div>
          <div className="buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
