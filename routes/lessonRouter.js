const express = require("express");
const router = express.Router();
const Lesson = require("../models/lesson");

// GET all lessons
router.get("/", async (req, res) => {
  try {
    const lessons = await Lesson.find().populate("feedback");
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a lesson by ID
router.get("/:id", async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id)
      .populate("feedback")
      .exec();
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a lesson
router.post("/", async (req, res) => {
  const { number, name, date, feedback } = req.body;
  const lesson = new Lesson({ number, name, date, feedback });

  try {
    const newLesson = await lesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update lesson by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedLesson)
      return res.status(404).json({ message: "Lesson not found" });
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE lesson by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedLesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!deletedLesson)
      return res.status(404).json({ message: "Lesson not found" });
    res.json({ message: "Lesson deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
