const express = require("express");
const router = express.Router();
const Class = require("../models/class");

// GET all classes
router.get("/", async (req, res) => {
  try {
    const classes = await Class.find();
    // .populate("lessons")
    // .populate("students")
    // .populate("professors");
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a class by ID
router.get("/:id", async (req, res) => {
  try {
    console.log("SEACHING ID ", req.params.id);
    const gotClass = await Class.findById(req.params.id)
      .populate("lessons")
      .populate("students")
      .populate("professors");
    if (!gotClass) return res.status(404).json({ message: "Class not found" });
    res.json(gotClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//add student to course
// PUT add a student to a class
router.put("/:courseID/add-student/:studentId", async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.courseID,
      { $addToSet: { students: req.params.studentId } }, // avoids duplicates
      { new: true }
    )
      .populate("lessons")
      .populate("students")
      .populate("professors");

    if (!updatedClass)
      return res.status(404).json({ message: "Class not found" });

    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//PUT add a prof
router.put("/:courseID/add-professor/:profID", async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.courseID,
      { $addToSet: { professors: req.params.profID } }, // avoids duplicates
      { new: true }
    )
      .populate("lessons")
      .populate("students")
      .populate("professors");

    if (!updatedClass)
      return res.status(404).json({ message: "Class not found" });

    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//PUT add a lesson
router.put("/:courseID/add-lesson/:lessonID", async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.courseID,
      { $addToSet: { lessons: req.params.lessonID } }, // avoids duplicates
      { new: true }
    )
      .populate("lessons")
      .populate("students")
      .populate("professors");

    if (!updatedClass)
      return res.status(404).json({ message: "Class not found" });

    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST create a class
router.post("/", async (req, res) => {
  const { name, abbrev, section, professors, students, lessons } = req.body;
  const newClass = new Class({
    name,
    abbrev,
    section,
    professors,
    students,
    lessons,
  });

  try {
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update class by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedClass)
      return res.status(404).json({ message: "Class not found" });
    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE class by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedClass = await Class.findByIdAndDelete(req.params.id);
    if (!deletedClass)
      return res.status(404).json({ message: "Class not found" });
    res.json({ message: "Class deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
