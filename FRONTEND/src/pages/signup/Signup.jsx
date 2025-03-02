import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      console.log(data)
      if (data.success) {
        navigate("/login");
      } else {
        console.error("Signup failed:", data.message);
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="myform">
      <form id="signup" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="email">
          <label htmlFor="email">Email : </label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="password">
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="submit">
          <button>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
