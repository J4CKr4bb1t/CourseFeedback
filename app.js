const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config(); // if using a .env file for DB URI

const app = express();

const authRouter = require("./routes/authRouter");
const classRouter = require("./routes/classRouter");
const feedbackRouter = require("./routes/feedbackRouter");
const lessonRouter = require("./routes/lessonRouter");

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/", authRouter);
app.use("/class", classRouter);
app.use("/feedback", feedbackRouter);
app.use("/lesson", lessonRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Connect to MongoDB and start server
// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/your-db-name';
const mongoURI = `mongodb+srv://sballerheiligen:rootBeer@cluster0.n44ml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`🚀 Server running at http://localhost:3000/`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });
