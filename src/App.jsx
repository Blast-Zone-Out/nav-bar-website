import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Services } from "./components/pages";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
