import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Addstudents from './Pages/Addstudents';
import Home from './Pages/Home';
import Editstudents from './Pages/Editstudents';
import './App.css'; // 👈 Add this line to import CSS

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to='/'><button className="nav-btn">🏠 Home</button></Link>
        <Link to='Add'><button className="nav-btn">➕ Add Student</button></Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Add' element={<Addstudents />} />
        <Route path='/edit/:id' element={<Editstudents />} />
      </Routes>
    </Router>
  );
};

export default App;

