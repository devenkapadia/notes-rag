import React from "react";
import "../styles/NoteList.css";

const NoteList = () => {
  const notes = ["Note 1", "Note 2", "Note 3"]; // Replace with dynamic data
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div key={index} className="note-item">
          {note}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
