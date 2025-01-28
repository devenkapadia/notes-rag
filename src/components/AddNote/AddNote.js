import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import "./AddNote.css"; // Custom styling for this page

const AddNote = () => {
  const [note, setNote] = useState(""); // Holds the rich-text editor content

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the note
    console.log("New Note Added:", note);
  };

  return (
    <div className="add-note-container">
      <h2 className="add-note-title">Add a New Note</h2>
      <form onSubmit={handleSubmit} className="add-note-form">
        <ReactQuill
          theme="snow"
          value={note}
          onChange={setNote}
          placeholder="Write your note here..."
          className="text-editor"
        />
        <button type="submit" className="btn-save">
          Save Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
