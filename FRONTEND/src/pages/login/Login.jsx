import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        navigate("/home");
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="myform">
      <form id="login" onSubmit={handleSubmit}>
        <div className="email">
          <label htmlFor="email">Email : </label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="password">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="submit">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
