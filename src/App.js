import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNote from "./components/AddNote/AddNote";
import ViewNotes from "./components/ViewNotes";
import NoteList from "./components/NoteList";
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<AddNote />} />
        {/* <Route path="/view-notes" element={<ViewNotes />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
