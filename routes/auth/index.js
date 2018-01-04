const express = require('express');

const router = express.Router();
const Controller = require('./auth.controller');

// login
router.post('/login', Controller.login);

module.exports = router;
