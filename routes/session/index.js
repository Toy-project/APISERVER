const express = require('express');
const path = require('path');

const router = express.Router();
const Controller = require(path.join(__dirname, './session.controller.js'));

//Get All Session
router.get('/', Controller.GetAllSession);

//Get a Session
router.get('/:session_id', Controller.GetSession);

//Create a session
router.post('/', Controller.createSession);

//Update a session
router.put('/:session_id', Controller.updateSession);

//Remove a session
router.delete('/:session_id', Controller.removeSession);

module.exports = router;
