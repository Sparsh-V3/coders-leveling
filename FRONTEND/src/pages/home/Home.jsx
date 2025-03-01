import React from "react";
import "./home.css";
import yoga1 from "../../assets/yogasana-big.jpg"

function Home() {
  return (
    <>
      <div className="container">
        <h1>Welcome To Gamify Wellness!</h1>
        <p>Accept the yoga routine, and become body fit🧘‍♀️</p>
      </div>

      <div className="about">
        <div className="left">
          <h2>About Us</h2>
          <p>
            Gamify Wellness is a community app which gives you full freedom to
            get fit with enjoyment. It helps you in tracking your progress, to
            get joined to your community, friends easily, to whom you want to
            connect or with whom you want to make your yoga, a fun! Our main
            motive is to keeps our users fit with fun! No more boring exercise,
            just connect to your community, do daily yoga with all and remain
            fit in all season.
          </p>
        </div>
        <div className="right">
          <img src={yoga1} alt="" />
        </div>
      </div>

      <div className="features">
        <h2>Track Yogasanas</h2>
        <p>Log your daily yoga poses and monitor your progress over time.</p>
      </div>
    </>
  );
}

export default Home;
