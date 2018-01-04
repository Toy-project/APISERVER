const express = require('express');

const router = express.Router();
const Controller = require('./session.controller.js');

// Get All Session
router.get('/', Controller.getAllSession);

// Get a Session
router.get('/:session_id', Controller.getSession);

// Create a session
router.post('/', Controller.createSession);

// Update a session
router.put('/:session_id', Controller.updateSession);

// Remove a session
router.delete('/:session_id', Controller.deleteSession);

module.exports = router;
