import axios from "./axios.js";

export const getTaskRequest = (id) => axios.get(`/task/${id}`);

export const getTasksRequest = () => axios.get(`/tasks`);

export const createTaskRequest = (task) => axios.post(`/tasks`, task);

export const updateTaskRequest = (id, task) =>
  axios.put(`/task/${id}`, task);

export const deleteTaskRequest = (id) => axios.delete(`/task/${id}`);
