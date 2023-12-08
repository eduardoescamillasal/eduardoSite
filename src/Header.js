// Header.js
import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/math'>Math</Link>
        </li>{" "}
        {/* Add a link to the MathComponent route */}
      </ul>
    </nav>
  );
};

export default Header;
