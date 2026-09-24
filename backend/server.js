const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const issueRoutes = require("./routes/issueRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error);
  });

app.use("/api/issues", issueRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "CampusFix API Server is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});