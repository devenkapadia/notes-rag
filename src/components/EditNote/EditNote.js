import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import "./editNote.css"; // Custom styling

const EditNote = ({ note, updateNote }) => {
  const [title, setTitle] = useState(""); // State for the title
  const [content, setContent] = useState(""); // State for the note content

  // Preload the note data
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the note
    const updatedNote = { ...note, title, content };
    updateNote(updatedNote); // Pass the updated note to the update function
    console.log("Note Updated:", updatedNote);
  };

  return (
    <div className="edit-note-container">
      <h2 className="edit-note-title">Edit Note</h2>
      <form onSubmit={handleSubmit} className="edit-note-form">
        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Edit the title here"
          className="note-title-input"
        />

        {/* Note Content Input (Text Editor) */}
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          placeholder="Edit your note here..."
          className="text-editor"
        />

        {/* Save Button */}
        <button type="submit" className="btn-save">
          Update Note
        </button>
      </form>
    </div>
  );
};

export default EditNote;
