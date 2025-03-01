const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userId: { type: String, unique: true, required: true },
    totalBonus: { type: Number, default: 0 },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email format!",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value
          );
        },
        message:
          "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.",
      },
    },
    totalBonus: { type: Number, default: 0 }, // ✅ Stores the total bonus points
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
      default: "https://example.com/default-avatar.png",
    },
  },
  {
    timestamps: true, // Automatically adds createdAt & updatedAt fields
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = { UserModel };
