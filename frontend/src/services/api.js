import axios from "axios";

const API = "http://127.0.0.1:8000/tasks/";

export const getTasks = () => axios.get(API);

export const createTask = (title, description) =>
  axios.post(API, null, {
    params: { title, description }
  });

export const updateTask = (task) =>
  axios.put(API + task.id, null, {
    params: {
      title: task.title,
      description: task.description,
      completed: task.completed
    }
  });

export const deleteTask = (id) =>
  axios.delete(API + id);
