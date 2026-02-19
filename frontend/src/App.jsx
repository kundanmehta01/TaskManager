import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (title, description) => {
    try {
      await createTask(title, description);
      await fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Failed to create task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      await fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Failed to delete task.");
    }
  };

  const handleToggle = async (task) => {
    try {
      await updateTask({
        ...task,
        completed: !task.completed,
      });
      await fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Failed to update task.");
    }
  };

  const handleUpdate = async (updatedTask) => {
    try {
      await updateTask(updatedTask);
      await fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Failed to update task.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10 px-4">
      <div className="w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Task Manager
        </h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <TaskForm onCreate={handleCreate} />

        {loading ? (
          <p className="text-center text-gray-500 mt-4">
            Loading tasks...
          </p>
        ) : (
          <TaskList
            tasks={tasks}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onUpdate={handleUpdate}
          />
        )}

      </div>
    </div>
  );
}

export default App;
