import React, { useEffect, useState } from "react";
import "./achievements.css";

const Achievements = ({ userId }) => {
  const [achievements, setAchievements] = useState([]);
  const [totalBonus, setTotalBonus] = useState(0);

  // Initialize achievements for the user
  useEffect(() => {
    fetch("http://localhost:3000/achievements/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });
  }, [userId]);

  // Fetch achievements from the backend
  useEffect(() => {
    fetch(`http://localhost:3000/achievements/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAchievements(data.achievements);
        setTotalBonus(data.totalBonus);
      })
      .catch((error) => console.error("Error fetching achievements:", error));
  }, [userId]);

  // Mark achievement as completed and update bonus
  const completeAchievement = (achievementId) => {
    fetch("http://localhost:3000/achievements/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, achievementId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAchievements(data.achievements);
        setTotalBonus(data.totalBonus);
      })
      .catch((error) => console.error("Error updating achievement:", error));
  };

  return (
    <div>
      <h2>Achievements</h2>
      <p>
        <strong>Total Bonus: {totalBonus} ⭐</strong>
      </p>
      <ul>
        {achievements.map((ach) => (
          <li key={ach._id} style={{ opacity: ach.achieved ? 1 : 0.5 }}>
            <strong>{ach.name}</strong> - {ach.description} -{" "}
            <b>Bonus: {ach.bonus} ⭐</b>
            {ach.achieved ? (
              " ✅"
            ) : (
              <button onClick={() => completeAchievement(ach._id)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
