import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        iNoteBook
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/" ? "active" : "" }`} aria-current="page" to="/">
              Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about" ? "active" : "" }`} to="/about">
              About
              </Link>
            </li>
          </ul>
    
          { !localStorage.getItem('token') ?
          <div className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/login" ? "active" : "" }`} aria-current="page"
                  to="/login">
                Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/signup" ? "active" : "" }`} to="/signup">
                Signup
                </Link>
              </li>
            </ul>
          </div> :
          <div className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==="/logout" ? "active" : "" }`} onClick={handleLogout}>
                Logout
                </Link>
              </li>
            </ul>
          </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
