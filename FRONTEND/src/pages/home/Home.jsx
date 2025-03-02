import React from "react";
import "./home.css";
import yoga1 from "../../assets/yogasana-big.jpg"

function Home() {
  return (
    <>
      <div className="container">
        <div className="sub-container">
          <h1>Transform Your Mind & Body with <span>Gamify Wellness</span></h1>
          <p>Join a thriving community where fitness meets fun! <br/> 
            Track your progress, connect with friends, and turn workouts into a game.</p>
          <button className="cta-button">Join Now</button>
        </div>
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

          <button className="cta-button">Join Now</button>

        </div>
        <div className="right">
          <img src={yoga1} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
