// Import necessary libraries and components
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import MathComponent from "./MathComponent";
import About from "./Pages/About"; 
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Welcome to My Math World</h1>
          <nav style={styles.nav}>
            <Link to='/' style={styles.navLink}>
              Home
            </Link>
            <Link to='/about' style={styles.navLink}>
              About
            </Link>
            <Link to='/math' style={styles.navLink}>
              Math
            </Link>
          </nav>
        </header>

        <main style={styles.mainContent}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/math' element={<MathComponent />} />
          </Routes>
        </main>

        <footer style={styles.footer}>
          <p style={styles.footerText}>© 2023 Eduardo Enrique Escamilla Saldaña. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};


const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',

  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
  },
  mainContent: {
    marginBottom: '40px',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#555',
  },
  footer: {
    borderTop: '1px solid #ddd',
    padding: '10px 0',
  },
  footerText: {
    fontSize: '0.8em',
    color: '#888',
  },
};

export default App;
