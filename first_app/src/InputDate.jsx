import React, { useState } from "react";

function formatDate(date) {
  const inputDate = new Date(date);
  const day = inputDate.getDate();
  const month = inputDate.getMonth() + 1;
  const year = inputDate.getFullYear();

  return `ngày ${day} tháng ${month} năm ${year}`;
}

export default function InputDate() {
  const [inputDate, setInputDate] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  const handleInputChange = (e) => {
    setInputDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // dùng để chặn sự kiện mặc định của form
    setFormattedDate(formatDate(inputDate));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            width: "200px",
            height: "30px",
            border: "1px solid red",
            borderRadius: "4px",
            padding: "4px",
            margin: "4px 0",
            boxSizing: "border-box",
          }}
          type="date"
          value={inputDate}
          onChange={handleInputChange}
        />
        <button
          style={{
            width: "100px",
            height: "30px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "4px",
            margin: "4px 0",
            boxSizing: "border-box",
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
      {formattedDate && (
        <p
          style={{
            color: "red",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {formattedDate}
        </p>
      )}
    </div>
  );
}
