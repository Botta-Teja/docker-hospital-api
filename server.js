const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointment");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/hospital")
.then(() => console.log("MongoDB Connected Successfully ✅"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hospital API Running Successfully 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});