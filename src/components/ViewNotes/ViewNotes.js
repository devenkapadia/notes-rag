import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing icons
import "./ViewNotes.css";
import noteContext from "../../context/notes/noteContext";

const ViewNotes = () => {
  const { notes, deleteNote } = useContext(noteContext); // Access notes and delete function
  const navigate = useNavigate();

  const handleExpandNote = (id) => {
    navigate(`/view-note/${id}`);
  };

  const handleEditNote = (id) => {
    navigate(`/edit-note/${id}`); // Navigate to edit note page
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
  };

  return (
    <div className="view-notes">
      <h2>All Notes</h2>
      <div className="notes-container">
        {notes && notes.length ? (
          notes.map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content.length > 100 ? `${note.content.substring(0, 100)}...` : note.content}</p>
              <div className="note-actions">
                <button onClick={() => handleExpandNote(note.id)} className="btn btn-primary">Expand</button>
                <button className="btn btn-primary">Chat</button>
                <FaEdit className="icon edit-icon" onClick={() => handleEditNote(note.id)} title="Edit Note" />
                <FaTrash className="icon delete-icon" onClick={() => handleDeleteNote(note.id)} title="Delete Note" />
              </div>
            </div>
          ))
        ) : (
          <p>No notes available</p>
        )}
      </div>
    </div>
  );
};

export default ViewNotes;
