const express = require('express');

const router = express.Router();
const Controller = require('./nexmo.controller.js');

// Get All Session
router.post('/verify', Controller.postVerify);

// Get a Session
router.post('/verify/check', Controller.postCheck);

// Get a Session
router.get('/verify/cancel', Controller.getCancel);

module.exports = router;
