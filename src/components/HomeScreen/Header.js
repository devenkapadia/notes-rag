import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="d-flex justify-content-end col-md-12">
      <nav className="navbar py-3">
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              My Notes
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              View Notes
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fa fa-th"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <i className="fa fa-user-circle"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
