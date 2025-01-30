import React, { useState } from "react";
import Header from "./Header";
import logo from "./../../assets/logo.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ user, onLogout }) => {
  const [term, setTerm] = useState("");
  const [response, setResponse] = useState(""); // State to store the response
  const [noteName, setNoteName] = useState(""); // State to store the note name
  const navigate = useNavigate();

  // Clear term by clicking on cross
  const clearTerm = () => {
    setTerm("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      // Simulate a response (replace with actual logic)
      setResponse(`Response for: "${term}"`);
      setNoteName("Note: Sample Note Name"); // Simulate note name retrieval
      setTerm(""); // Clear the input field
    }
  };

  // Handle navigation to Add Note
  const handleAddNote = () => {
    navigate("/add-note");
  };

  // Handle navigation to View Notes
  const handleViewNotes = () => {
    navigate("/view-notes");
  };

  return (
    <>
      <Header user={user} onLogout={onLogout} />
      <div className="container">
        <div className="row">
          <div className="col-md-12 home-screen align-items-center justify-content-center">
            <img src={logo} alt="App Logo" className="octopus" />
            {/* Search Bar */}
            <div className="search-box col-md-7 border d-flex py-2 justify-content-between align-items-center">
              <i className="fa fa-search"></i>
              <form className="form-search" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="term"
                  id="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  placeholder="Type a message..."
                />
              </form>
              {term && <i className="fa fa-close" onClick={clearTerm}></i>}
            </div>
            {/* Response Box */}
            {response && (
              <div className="response-box col-md-7 mt-4">
                <div className="response-text">{response}</div>
                <div className="note-name">{noteName}</div>
              </div>
            )}
            {/* Buttons */}
            <div className="buttons d-flex gap-3 col-md-4 ml-5 mt-4 align-items-center justify-content-center">
              <input
                type="button"
                className="btn btn-light mx-1"
                value="Add Note"
                onClick={handleAddNote}
              />
              <input
                type="button"
                className="btn btn-light"
                value="My Notes"
                onClick={handleViewNotes}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;