import React from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Explore from "./pages/Explore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
