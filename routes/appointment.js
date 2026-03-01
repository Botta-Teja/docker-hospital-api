const express = require("express");
const Appointment = require("../models/Appointment");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// CREATE APPOINTMENT (Protected)
router.post("/create", authMiddleware, async (req, res) => {
    try {
        const { patientName, doctorName, date } = req.body;

        const newAppointment = new Appointment({
            patientName,
            doctorName,
            date,
            createdBy: req.user.id
        });

        await newAppointment.save();

        res.status(201).json({ message: "Appointment created successfully ✅" });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// GET ALL APPOINTMENTS (Protected)
router.get("/all", authMiddleware, async (req, res) => {
    try {
        const appointments = await Appointment.find().populate("createdBy", "name email role");

        res.json(appointments);

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;