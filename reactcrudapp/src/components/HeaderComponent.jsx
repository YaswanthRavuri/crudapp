import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <h2 className='text-white text-center'>Student Records CRUD App</h2>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/students" className="nav-link">Students</Link>
                    </li>
                    <li className="nav-item active">
                    <Link to="/registerstudent" className="nav-link">Register Student</Link>
                    </li>
                  </ul>
                </div>
            </nav>
        </header>
    </div>
  );
}