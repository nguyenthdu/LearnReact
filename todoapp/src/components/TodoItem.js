// src/components/TodoItem.js
import React from "react";
import Checkbox from "@mui/material/Checkbox";

export default function TodoItem({
  todo,
  onCheckBtnClick,
  onDeleteBtnClick,
  onEditBtnClick,
}) {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        height: "40px",
        marginTop: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => onCheckBtnClick(todo.id, todo.isCompleted)}
        />
        <span
          style={{
            fontSize: "20px",
            textDecoration: todo.isCompleted ? "line-through" : "none",
            color: todo.isCompleted ? "gray" : "black",
          }}
        >
          {todo.title}
        </span>
      </div>
      <div style={{ marginRight: "10px" }}>
        <button
          style={{
            width: "50px",
            height: "30px",
            color: "white",
            border: "none",
            borderRadius: "10px",
            background: "green",
            marginRight: "5px",
          }}
          onClick={() => onEditBtnClick(todo)}
        >
          Sửa
        </button>
        <button
          style={{
            width: "50px",
            height: "30px",
            color: "white",
            border: "none",
            borderRadius: "10px",
            background: "red",
          }}
          onClick={() => onDeleteBtnClick(todo.id)}
        >
          Xóa
        </button>
      </div>
    </div>
  );
}
