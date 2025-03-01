const express = require("express");
const { dbConnect } = require("./dbConnect");
const { userRoute } = require("./routes/user.route");
const cors = require("cors")

require("dotenv").config();

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],

}))
const port = Number(process.env.PORT_NUMBER) || 5000;

app.use(express.json());
app.use("/", userRoute)

app.get("/", (req, res) => {
  res.send("Testing backend....");
});

app.listen(port, () => {
  dbConnect();
  console.log(`The server is running at http://localhost:${port}`);
});
