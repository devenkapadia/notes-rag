import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import "./editNote.css"; // Custom styling
import { useNavigate, useParams } from "react-router-dom";
import noteContext from "../../context/notes/noteContext";

const EditNote = ({ getNoteById, updateNote }) => {
  const { notes, editNote } = useContext(noteContext); // ✅ Now getting notes from context
  const { id } = useParams();
  const note = notes.find((n) => n.id === parseInt(id));

  const handleUpdate = () => {
    editNote(note.id, note.title, note.content, "tag"); // ✅ Update note
    console.log("Note Updated:");
    navigate("/");
  };
  const navigate = useNavigate();
  
  const [title, setTitle] = useState(note ? note.title : ""); // State for the title
  const [content, setContent] = useState(note ? note.content : ""); // State for the note content
  
  if (!note) return <p>Note not found</p> 

  return (
    <div className="edit-note-container">
      <h2 className="edit-note-title">Edit Note</h2>
      <form className="edit-note-form">
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
        <button onClick={handleUpdate} className="btn-save">
          Update Note
        </button>
      </form>
    </div>
  );
};

export default EditNote;
