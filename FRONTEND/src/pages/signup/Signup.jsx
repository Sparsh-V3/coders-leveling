import React, { useEffect, useState } from "react";
import "./signup.css";

function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null,
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleFileChange = (event) => {
  //   setUserData((prevData) => ({ ...prevData, avatar: event.target.files[0] }));
  //   console.log(userData);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    // formData.append("avatar", userData.avatar);

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
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
        <div className="dob">
          <label htmlFor="dob">Date of birth : </label>
          <input type="Date" name="dob" />
        </div>
        {/* <div className="avatar">
          <label htmlFor="avatar">Profile Pic : </label>
          <input type="file" name="avatar" id="" onChange={handleFileChange} />
        </div> */}
        <div className="submit">
          <button>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
