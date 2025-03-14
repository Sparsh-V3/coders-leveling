const express = require("express");
const { dbConnect } = require("./dbConnect");
const { userRoute } = require("./routes/user.route");
const { AchievementRoute } = require("./routes/achivements");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const port = Number(process.env.PORT_NUMBER) || 5000;

app.use(express.json());
app.use("/", userRoute);
app.use("/", AchievementRoute);

app.get("/", (req, res) => {
  res.send("Testing backend....");
});

app.listen(port, () => {
  dbConnect();
  console.log(`The server is running at http://localhost:${port}`);
});
