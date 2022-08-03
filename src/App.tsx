import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ring from './components/ring/ring';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import About from './Pages/about/aboutMe';
import Projects from './Pages/projects/projects';
import Contact from './Pages/contacts/contacts';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Ring/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
