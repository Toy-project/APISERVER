const express = require('express');

const router = express.Router();
const Controller = require('./auth.controller');

// member login
router.post('/member', Controller.memberLogin);

// club login
router.post('/club', Controller.clubLogin);

module.exports = router;
