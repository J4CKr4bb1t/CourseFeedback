/*
Name: Charlize Aponte
Description: Feedback Router for feedback model
*/
const express = require("express");
const feedbackRouter = express.Router();
const Feedback = require("../models/feedback");
const Lesson = require("../models/lesson");

// POST to give feedback on a specific lesson by a specific user in a specific class
feedbackRouter
  .route("/:userID/:lessonID")
  .post(async (req, res) => {
    try {
      const { userID, lessonID } = req.params;
      const { contentClarity, pace, suggestions } = req.body;

      const newFeedback = new Feedback({
        lesson: lessonID,
        user: userID,
        contentClarity,
        pace,
        suggestions,
      });

      const savedFeedback = await newFeedback.save();

      //now to update lesson
      // Find the corresponding lesson and update the feedback array
      const updatedLesson = await Lesson.findByIdAndUpdate(
        lessonID,
        { $push: { feedback: savedFeedback._id } }, // Push the new feedback's ObjectId to the feedback array
        { new: true } // Return the updated lesson
      ).populate("feedback"); // Optional: populate feedback to get full feedback details

      if (!updatedLesson) {
        return res.status(404).json({ error: "Lesson not found." });
      }

      //back to feedback

      res.status(201).json(savedFeedback);
    } catch (error) {
      console.error("Error giving feedback:", error);
      res.status(500).json({ error: "Failed to submit feedback." });
    }
  })
  .put(async (req, res) => {
    try {
      const { userID, lessonID } = req.params;
      const { contentClarity, pace, suggestions } = req.body;

      const updatedFeedback = await Feedback.findOneAndUpdate(
        { user: userID, lesson: lessonID },
        { contentClarity, pace, suggestions },
        { new: true } // Returns the updated document
      );

      if (!updatedFeedback) {
        return res
          .status(404)
          .json({ error: "Feedback not found for this user and lesson." });
      }

      res.status(200).json(updatedFeedback);
    } catch (error) {
      console.error("Error editing feedback:", error);
      res.status(500).json({ error: "Failed to update feedback." });
    }
  });

// GET to view all feedback for a specific lesson
feedbackRouter.route("/:lessonID").get(async (req, res) => {
  try {
    const { lessonID } = req.params;
    const feedbackList = await Feedback.find({ lesson: lessonID });
    res.status(200).json(feedbackList);
  } catch (error) {
    console.error("Error viewing feedback:", error);
    res
      .status(500)
      .json({ error: "Failed to retrieve feedback for this lesson." });
  }
});

// DELETE feedback by its own Mongo _id
feedbackRouter.delete("/id/:feedbackId", async (req, res) => {
  try {
    const deleted = await Feedback.findByIdAndDelete(req.params.feedbackId);
    if (!deleted) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    res.json({ message: "Feedback deleted", deleted });
  } catch (err) {
    console.error("Error deleting feedback:", err);
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

module.exports = feedbackRouter;
