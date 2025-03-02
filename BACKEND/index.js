const express = require("express");
const { dbConnect } = require("./dbConnect");
const { userRoute } = require("./routes/user.route");
const {AchievementRoute} = require("./routes/achivements")
const cors = require("cors")
<<<<<<< HEAD
=======

>>>>>>> 3bdfe61c75d7360c5d06cace65767acc270fc6a9

require("dotenv").config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],

}))

const port = Number(process.env.PORT_NUMBER) || 5000;

app.use(express.json());
app.use("/", userRoute)
app.use("/",AchievementRoute)

app.get("/", (req, res) => {
  res.send("Testing backend....");
});

app.listen(port, () => {
  dbConnect();
  console.log(`The server is running at http://localhost:${port}`);
});
