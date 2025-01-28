import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import AddNote from "./components/AddNote/AddNote";
import ViewNotes from "./components/ViewNotes/ViewNotes";
// import NoteList from "./components/NoteList";
import SingleNote from "./components/EditNote/EditNote";
import Home from "./components/HomeScreen/Home";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  // serach data
  const [searchData, setSearchData] = useState({});
  //set search term
  // const setSearch = async (term) => {
  //   setSearchTerm(term);
  //   await setData(term);
  //   history.push('/search');
  // };
  const note = {
    id: 1,
    title: "First Note",
    content: "This is the content of the first note.",
  };

  const updateNote = (updatedNote) => {
    // const index = notes.findIndex((note) => note.id === updatedNote.id);
    // if (index > -1) {
    //   notes[index] = updatedNote; // Update the note in the array
    //   console.log("Updated Notes:", notes); // Log updated notes
    // }
    console.log("Notes");
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/view-notes" element={<ViewNotes />} />
        <Route
          path="/view-note/:id"
          element={
            <SingleNote
              note={note} // Find the specific note
              updateNote={updateNote} // Pass the update function
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
