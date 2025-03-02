const mongoose = require("mongoose");

const achievementsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  name: { type: String, required: true },
  description: { type: String, required: true },
  achived: { type: Boolean, default: false },
  bonus: { type: Number, required: true },
});

const AchievementsModel = mongoose.model("Achievement", achievementsSchema);

module.exports = { AchievementsModel };
