const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Controller = require(path.join(__dirname, './auth.controller'));

// login
router.post('/login', Controller.login);

module.exports = router;