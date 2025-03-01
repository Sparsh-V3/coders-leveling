const mongoose = require("mongoose");
require("dotenv").config()

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database successfully.");
  } catch (error) {
    console.log("Error occurred while connecting to database : ", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { dbConnect };
