import React from "react";
import "../styles/ViewNotes.css";

const ViewNotes = () => {
  const notes = ["Note 1", "Note 2", "Note 3"]; // Replace with dynamic data

  return (
    <div className="view-notes">
      <h2>All Notes</h2>
      {notes.length ? (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      ) : (
        <p>No notes available</p>
      )}
    </div>
  );
};

export default ViewNotes;
