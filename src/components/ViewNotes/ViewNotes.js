import React from "react";
import "./ViewNotes.css";
import { useNavigate } from "react-router-dom";

const notes = [
  {
    id: 1,
    title: "Shopping List",
    content: "Buy groceries for the week: \n- Milk (2 liters) \n- Eggs (12) \n- Bread (1 loaf) \n- Chicken breasts (1 kg) \n- Rice (2 kg) \n- Vegetables (carrots, spinach, potatoes) \n- Snacks (chips, chocolate, cookies)."
  },
  {
    id: 2,
    title: "Meeting Notes",
    content: "Client Meeting on 25th January: \n- Agenda: Project requirements and timeline. \n- Key Points: 1. Deliverable #1 due by 15th February. 2. Budget approval needed for additional features."
  },
  {
    id: 3,
    title: "Fitness Goals",
    content: "Plan for Q1 2025: \n- Cardio: Run 5km every morning (Monday-Friday). \n- Strength Training: Monday: Upper body workout, Wednesday: Core workout, Friday: Lower body workout."
  }
];

const ViewNotes = () => {
  const navigate = useNavigate();

  const handleExpandNote = (id) => {
    navigate(`/view-note/${id}`);
  };

  const handleChatWithNote = (id) => {
    console.log("Chat with Note ID:", id);
    // Redirect or open chat functionality
  };

  return (
    <div className="view-notes">
      <h2>All Notes</h2>
      <div className="notes-container">
        {notes.length ? (
          notes.map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content.length > 100 ? `${note.content.substring(0, 100)}...` : note.content}</p>
              <div className="note-actions">
                <button onClick={() => handleExpandNote(note.id)} className="btn btn-primary">Expand</button>
                <button onClick={() => handleChatWithNote(note.id)} className="btn btn-secondary">Chat</button>
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