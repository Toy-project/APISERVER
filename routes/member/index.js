const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Controller = require(path.join(__dirname, './member.controller.js'));

// get user list
router.get('/', Controller.getAllMember);

// get user
router.get('/:mem_id', Controller.getMember);

// create user
router.post('/', Controller.register);

// Delete user
router.delete('/:mem_id', Controller.removeMember);

// update user
router.put('/:mem_id', Controller.updateMember);


module.exports = router;
