import { useState } from "react";

export default function TaskItem({ task, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    onUpdate({
      ...task,
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-3 rounded mb-3">
      {isEditing ? (
        <div>
          <input
            className="w-full border p-2 rounded mb-2"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded mb-2"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-400 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div>
            <h3
              className={`font-semibold ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </h3>
            <p className="text-sm text-gray-600">{task.description}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onToggle(task)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              {task.completed ? "Undo" : "Done"}
            </button>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
