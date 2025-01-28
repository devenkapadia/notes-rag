import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import "./AddNote.css"; // Custom styling for full height

const AddNote = () => {
  const [title, setTitle] = useState(""); // State for the title
  const [note, setNote] = useState(""); // State for the note content

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the note
    console.log("Note Added:", { title, content: note });
  };

  return (
    <div className="add-note-container">
      <h2 className="add-note-title">Add a New Note</h2>
      <form onSubmit={handleSubmit} className="add-note-form">
        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title here"
          className="note-title-input"
        />

        {/* Note Content Input (Text Editor) */}
        <ReactQuill
          theme="snow"
          value={note}
          onChange={setNote}
          placeholder="Write your note here..."
          className="text-editor"
        />

        {/* Save Button */}
        <button type="submit" className="btn-save">
          Save Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
