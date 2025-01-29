import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AddNote from "./components/AddNote/AddNote";
import ViewNotes from "./components/ViewNotes/ViewNotes";
import EditNote from "./components/EditNote/EditNote";
import Home from "./components/HomeScreen/Home";
import ViewNote from "./components/ViewNote/ViewNote";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login/Login";

function App() {
  const isAuthenticated = () => {
    // return localStorage.getItem("user") !== null;
    return true;
  };

  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData); // Update user state
  };

  const handleLogout = () => {
    setUser(null); // Clear user state
  };

  return (
    <NoteState>
      <Router>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin}/>} />
          <Route
            path="/"
            element={isAuthenticated() ? <Home user={user} onLogout={handleLogout}/> : <Navigate to="/login" />}
          />
          <Route
            path="/add-note"
            element={isAuthenticated() ? <AddNote /> : <Navigate to="/login" />}
          />
          <Route
            path="/view-notes"
            element={
              isAuthenticated() ? <ViewNotes /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/edit-note/:id"
            element={
              isAuthenticated() ? <EditNote /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/view-note/:id"
            element={
              isAuthenticated() ? <ViewNote /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;
