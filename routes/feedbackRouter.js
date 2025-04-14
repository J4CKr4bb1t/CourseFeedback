/*
Name: Charlize Aponte
Description: Feedback Router for feedback model
*/
const express = require('express');
const feedbackRouter = express.Router();
const Feedback = require('../models/feedback'); 

// POST to give feedback on a specific lesson by a specific user in a specific class
feedbackRouter.route('/lesson/:userID/:classID/:lessonID')
    .post(async (req, res) => {
        try {
            const { userID,lessonID } = req.params;
            const { contentClarity, pace, suggestions } = req.body;

            const newFeedback = new Feedback({
                lesson: lessonID,
                user: userID,
                contentClarity,
                pace,
                suggestions
            });

            const savedFeedback = await newFeedback.save();
            res.status(201).json(savedFeedback);
        } catch (error) {
            console.error('Error giving feedback:', error);
            res.status(500).json({ error: 'Failed to submit feedback.' });
        }
    });

// GET to view all feedback for a specific lesson
feedbackRouter.route('/lesson/:lessonID')
    .get(async (req, res) => {
        try {
            const { lessonID } = req.params;
            const feedbackList = await Feedback.find({ lesson: lessonID }); 
            res.status(200).json(feedbackList);
        } catch (error) {
            console.error('Error viewing feedback:', error);
            res.status(500).json({ error: 'Failed to retrieve feedback for this lesson.' });
        }
    });

// PUT to edit feedback given by a specific user on a specific lesson 
feedbackRouter.route('/lesson/:userID/:classID/:lessonID')
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
                return res.status(404).json({ error: 'Feedback not found for this user and lesson.' });
            }

            res.status(200).json(updatedFeedback);
        } catch (error) {
            console.error('Error editing feedback:', error);
            res.status(500).json({ error: 'Failed to update feedback.' });
        }
    });

module.exports = feedbackRouter;