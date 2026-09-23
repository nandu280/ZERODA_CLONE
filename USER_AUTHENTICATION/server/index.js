const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const authRoute = require("./Routes/AuthRoute");

const app = express();

const { MONGO_URL } = process.env;
const PORT = process.env.PORT || 4000;

// =========================
// MIDDLEWARE
// =========================

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// =========================
// ROUTES
// =========================

app.use("/", authRoute);

// =========================
// MONGODB + SERVER
// =========================

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB is connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });