import React, { useEffect, useState } from "react";
import "./dashboard.css";
import dp_man from "../../assets/man-user-circle-icon.svg";
import dp_womman from "../../assets/woman-user-circle-icon.svg";

function Dashboard() {
  const [yogasList, setYogasList] = useState([]);

  const yogasListData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/rebeccaestes/yoga_api/refs/heads/master/yoga_api.json"
      );
      const data = await response.json();
      setYogasList(data);
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  useEffect(() => {
    yogasListData();
  }, []);

  return (
    <>
      <h1 style={{textAlign: "center", fontSize:"3rem"}}>Welcome to Dashboard</h1>
      <div id="dashboard">
        <div id="user-actions">
          <div className="user-profile">
            <div className="image">
              <img src={dp_man} alt="" />
            </div>
          <p>Name : </p>
          <p>UserID : </p>
          </div>
          <hr />
          <div className="details">
            <p>Current Level : </p>
            <p>XP obtained : </p>
          </div>
        </div>
        <div id="user-requests">
          <div className="options">
            <div><button>List of Yogasanas</button></div>
          </div>
          <div className="options-results">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
