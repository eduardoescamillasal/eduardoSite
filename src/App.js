// App.js
import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./Pages/About";
import MathComponent from "./MathComponent"; // Correct import path
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/math' element={<MathComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
