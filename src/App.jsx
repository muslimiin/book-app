import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
};

export default App;
