const express = require('express');

const router = express.Router();
const Controller = require('./mail.controller.js');

// Get All Session
router.post('/verify', Controller.postEmailAuth);

// Get a Session
// router.post('/verify/check', Controller.postEmailAuthCheck);

module.exports = router;
