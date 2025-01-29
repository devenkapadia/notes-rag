import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    // Initial Notes Array (Stored Locally)
    const [notes, setNotes] = useState([
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
    ]);

    // Fetch all notes (simply return existing local notes)
    const getNotes = () => {
        return notes;
    };

    // Add a new note locally
    const addNote = (title, content) => {
        console.log("here is state");
        
        const newNote = {
            id: notes.length + 1, // Simple unique ID
            title,
            content
        };
        setNotes([...notes, newNote]); // Update state
    };

    // Delete a note locally
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id)); // Remove from state
    };

    // Edit a note locally
    const editNote = (id, updatedTitle, updatedContent) => {
        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, title: updatedTitle, content: updatedContent } : note
            )
        );
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
