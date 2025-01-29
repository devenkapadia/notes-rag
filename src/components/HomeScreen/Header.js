import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function from App.js
    navigate("/"); // Redirect to login
  };

  return (
    <div className="header">
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <a href="/add-note" className="nav-link">Add Note</a>
          </li>
          <li className="nav-item">
            <a href="/view-notes" className="nav-link">View Notes</a>
          </li>
          {user ? (
            <li className="nav-item profile-dropdown">
              <img src={user.picture} alt="Profile" className="profile-pic" />
              <div className="dropdown-content">
                <p>{user.name}</p>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            </li>
          ) : (
            <li className="nav-item">
              <a href="/" className="nav-link"><i className="fa fa-user-circle"></i></a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;