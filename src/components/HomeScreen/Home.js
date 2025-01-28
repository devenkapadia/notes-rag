import React, { useState } from "react";
import Header from "./Header";
import logo from "./../../assets/logo.png";

import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ setSearch }) => {
  //controlling form
  const [term, setTerm] = useState("");
  const navigate = useNavigate()
  // clear term by clicking on cross
  const clearTerm = () => {
    setTerm("");
  };

  // submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term.trim());
    }
  };

  // handle search
  const handleAddNote = () => {
    navigate("/add-note")
  };

  const handleViewNotes = () => {
    navigate("/view-notes")
  };

  return (
    <>
      <Header handleAddNote={handleAddNote} handleViewNotes={handleViewNotes}/>
      <div className="container">
        <div className="row">
          <div className="col-md-12 home-screen align-items-center justify-content-center">
            <img src={logo} alt="Google Logo" className="octopus" />
            <div className="search-box col-md-7 border d-flex py-2 justify-content-between align-items-center">
              <i className="fa fa-search"></i>
              <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  name="term"
                  id="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </form>
              {term ? (
                <i className="fa fa-close" onClick={() => clearTerm()}></i>
              ) : (
                ""
              )}
            </div>
            <div className="buttons d-flex gap-3 col-md-4 ml-5 mt-4 align-items-center justify-content-center">
              <input
                type="button"
                className="btn btn-light mx-1"
                value="Add Note"
                onClick={() => handleAddNote()}
              />
              <input type="button" className="btn btn-light" value="My Notes" onClick={handleViewNotes}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
