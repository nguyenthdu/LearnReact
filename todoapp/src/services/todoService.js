// src/services/todoService.js
import * as todoApi from "../api/todoApi";

export const getTodos = async () => {
  const response = await todoApi.fetchTodos();
  return response.data;
};

export const createTodo = async (title) => {
  const newTodo = { title, isCompleted: false };
  const response = await todoApi.addTodo(newTodo);
  return response.data;
};

export const toggleTodoCompletion = async (id, isCompleted) => {
  const response = await todoApi.updateTodo(id, { isCompleted });
  return response.data;
};

export const removeTodo = async (id) => {
  await todoApi.deleteTodo(id);
};
export const editTodo = async (id, updatedTitle) => {
  const response = await todoApi.updateTodo(id, { title: updatedTitle });
  return response.data;
};
