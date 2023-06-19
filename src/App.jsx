import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/name/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
