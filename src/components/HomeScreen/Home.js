import React, { useState } from "react";
import Header from "./Header";
import logo from "./../../assets/logo.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ user, onLogout }) => {
  const [term, setTerm] = useState("");
  const [messages, setMessages] = useState([]); // State to store chat messages
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
      // Add user's message to chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: term, isUser: true },
      ]);

      // Add system's response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `${term} okay`, isUser: false },
      ]);

      // Clear the input field
      setTerm("");
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

  // Reset chat and go back to initial interface
  const handleResetChat = () => {
    setMessages([]); // Clear chat messages
  };

  return (
    <>
      <Header user={user} onLogout={onLogout} />
      {messages.length === 0 ? (
        // Initial Interface (when no messages are written)
        <div className="container">
          <div className="row">
            <div className="col-md-12 home-screen align-items-center justify-content-center">
              <img src={logo} alt="App Logo" className="octopus" />
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
      ) : (
        // Full-Page Chat Interface (when messages are written)
        <div className="home-container">
          {/* Logo at the Top */}
          <div className="chat-logo">
            <img src={logo} alt="App Logo" className="octopus" />
            <button className="reset-chat-btn" onClick={handleResetChat}>
              Reset Chat
            </button>
          </div>

          {/* Chat Interface */}
          <div className="chat-container">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.isUser ? "user-message" : "system-message"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="input-box">
            <form className="form-search" onSubmit={handleSubmit}>
              <input
                type="text"
                name="term"
                id="term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Type a message..."
              />
              {term && <i className="fa fa-close" onClick={clearTerm}></i>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
