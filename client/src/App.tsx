import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Home from './pages/home';
import LandingPage from './pages/landing';

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/gallery" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
