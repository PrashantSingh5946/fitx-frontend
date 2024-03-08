import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login/page";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
