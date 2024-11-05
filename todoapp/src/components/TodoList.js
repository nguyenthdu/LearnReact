// src/components/TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todoList,
  onCheckBtnClick,
  onDeleteBtnClick,
  onEditBtnClick,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckBtnClick={onCheckBtnClick}
          onDeleteBtnClick={onDeleteBtnClick}
          onEditBtnClick={onEditBtnClick}
        />
      ))}
    </div>
  );
}
