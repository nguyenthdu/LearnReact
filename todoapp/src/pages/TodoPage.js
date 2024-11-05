// src/pages/TodoPage.js
import React, { useState, useEffect, useCallback } from "react";
import TodoList from "../components/TodoList";
import {
  getTodos,
  createTodo,
  toggleTodoCompletion,
  removeTodo,
  editTodo,
} from "../services/todoService";

export default function TodoPage() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const todos = await getTodos();
      setTodoList(todos);
    };
    fetchData();
  }, []);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(async () => {
    if (textInput === "") return;

    if (editingTodo) {
      const updatedTodo = await editTodo(editingTodo.id, textInput);
      setTodoList((prevList) =>
        prevList.map((todo) =>
          todo.id === editingTodo.id ? updatedTodo : todo
        )
      );
      setEditingTodo(null);
    } else {
      const newTodo = await createTodo(textInput);
      setTodoList((prevList) => [newTodo, ...prevList]);
    }

    setTextInput("");
  }, [textInput, todoList, editingTodo]);

  const onCheckBtnClick = useCallback(async (id, currentStatus) => {
    const updatedTodo = await toggleTodoCompletion(id, !currentStatus);
    setTodoList((prevList) =>
      prevList.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  }, []);

  const onDeleteBtnClick = useCallback(async (id) => {
    await removeTodo(id);
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  }, []);

  const onEditBtnClick = useCallback((todo) => {
    setTextInput(todo.title);
    setEditingTodo(todo);
  }, []);

  return (
    <>
      <h3>Danh sách việc cần làm</h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <input
          style={{
            fontSize: "20px",
            borderRadius: "5px 0 0 5px",
            borderWidth: "1px",
            borderColor: "blue",
          }}
          type="text"
          placeholder="Thêm việc cần làm"
          value={textInput}
          onChange={onTextInputChange}
        />
        <button
          style={{
            borderRadius: "0 5px 5px 0",
            fontSize: "20px",
            borderWidth: "1px",
            borderColor: "blue",
            color: "white",
            background: textInput ? "blue" : "gray",
          }}
          onClick={onAddBtnClick}
          disabled={!textInput}
        >
          {editingTodo ? "Cập nhật" : "Thêm"}
        </button>
      </div>
      <TodoList
        todoList={todoList}
        onCheckBtnClick={onCheckBtnClick}
        onDeleteBtnClick={onDeleteBtnClick}
        onEditBtnClick={onEditBtnClick}
      />
    </>
  );
}
