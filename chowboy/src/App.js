import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Login from "./pages/Login"
import About from "./pages/About";
import Faq from "./pages/Faq";
import SignUp from "./pages/SignUp";
import Events from "./pages/Events"
import Feed from "./pages/Feed"
import Codes from "./pages/Codes"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/events" element={<Events />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/codes" element={<Codes />} />
      </Routes>
    </Router>
  );
}

export default App;

