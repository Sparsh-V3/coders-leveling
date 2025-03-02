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

  const handleLogin = () => {
    navigate("/login")
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
        <p onClick={() => {navigate("/")}}>Home</p>
        <p onClick={() => {navigate("/dashboard")}}>Dashboard</p>
        <p>Leaderboard</p>
        <p onClick={() => {navigate("/achievements")}}>Achievements</p>
      </div>
      <div className={`signup-login ${menuOpen ? "show" : ""}`}>
        <button onClick={handleSignup}>Signup</button>
        <button onClick={handleLogin}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
