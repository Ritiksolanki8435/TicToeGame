import "./App.css";
import React from "react";
import Box from "./components/Box";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Box" element={<Box />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
