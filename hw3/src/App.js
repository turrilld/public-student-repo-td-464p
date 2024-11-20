import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './style.css';

import Home from './views/Home';
import List from './views/List';
import Population from './views/Population';
import GDP from './views/GDP';

export default function App() {
  return (
    <Router>
      <nav className="nav">
        <ul className="navBar">
          <li>
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/list">
              List
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/population">
              Population
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/gdp">
              GDP
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home title="Home Page" />} />
        <Route path="/list" element={<List title="List Page" />} />
        <Route
          path="/population"
          element={<Population title="Population Page" />}
        />
        <Route path="/gdp" element={<GDP title="GDP Page" />} />
      </Routes>
    </Router>
  );
}
