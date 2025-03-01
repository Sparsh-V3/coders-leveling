import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup")
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav id="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`contents ${menuOpen ? "show" : ""}`}>
        <p>Home</p>
        <p>Dashboard</p>
        <p>Leaderboard</p>
        <p>Achievements</p>
      </div>
      <div className={`signup-login ${menuOpen ? "show" : ""}`}>
        <button onClick={handleSignup}>Signup</button>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
