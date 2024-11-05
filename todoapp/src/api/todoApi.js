// src/api/todoApi.js
import axios from "axios";

const API_URL = "https://6544bafe5a0b4b04436cd987.mockapi.io/todo";

export const fetchTodos = () => axios.get(API_URL);

export const addTodo = (newTodo) => axios.post(API_URL, newTodo);

export const updateTodo = (id, updatedTodo) =>
  axios.put(`${API_URL}/${id}`, updatedTodo);

export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
