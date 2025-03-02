const express = require("express");
const { AchievementsModel } = require("../models/achivements");
const { UserModel } = require("../models/user.model");
require("dotenv").config();

const AchievementRoute = express.Router();

AchievementRoute.post("/achievements/init", async (req, res) => {
  const { userId } = req.body;

  const user = await UserModel.findOne({ userId });
  if (!user) {
    await UserModel.create({ userId, totalBonus: 0 });
    const defaultAchievements = [
      {
        userId,
        name: "First Yoga Session",
        description: "Complete your first session",
        achieved: false,
        bonus: 10,
      },
      {
        userId,
        name: "5-Day Streak",
        description: "Do yoga for 5 days in a row",
        achieved: false,
        bonus: 20,
      },
      {
        userId,
        name: "Master of Balance",
        description: "Hold a balance pose for 30 seconds",
        achieved: false,
        bonus: 30,
      },
    ];
    await Achievement.insertMany(defaultAchievements);
  }
});

AchievementRoute.get("/achievements/:userId", async (req, res) => {
  const { userId } = req.params;
  const achievements = await AchievementsModel.find({ userId });
  const user = await UserModel.findOne({ userId });

  res.json({ achievements, totalBonus: user ? user.totalBonus : 0 });
});

AchievementRoute.post("/achievements/update", async (req, res) => {
  const { userId, achievementId } = req.body;

  const achievement = await AchievementsModel.findById(achievementId);
  if (achievement && !achievement.achieved) {
    achievement.achieved = true;
    await achievement.save();
  }

  const user = await UserModel.findOne({ userId });
  if (user) {
    user.totalBonus += achievement.bonus;
    await user.save();
  }
  res.json({
    message: "Achievement updated", 
    achievements: updatedAchievements,
    totalBonus: updatedUser.totalBonus,
  });
});


module.exports = {AchievementRoute}