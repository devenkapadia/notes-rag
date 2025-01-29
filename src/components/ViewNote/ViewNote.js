import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import noteContext from "../../context/notes/noteContext";
import "./ViewNote.css";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons

const ViewNote = () => {
  const { id } = useParams();
  const { notes, deleteNote } = useContext(noteContext);
  const navigate = useNavigate();

  const note = notes.find((n) => n.id === parseInt(id));

  if (!note) {
    return <h2 className="error-message">Note not found</h2>;
  }

  const handleEdit = () => {
    navigate(`/edit-note/${id}`); // Redirect to edit page
  };

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/view-notes"); // Redirect to notes list after deleting
  };

  return (
    <div className="view-note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div className="note-actions">
        <button onClick={handleEdit} className="edit-btn">
          <FaEdit /> Edit
        </button>
        <button onClick={handleDelete} className="delete-btn">
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default ViewNote;
