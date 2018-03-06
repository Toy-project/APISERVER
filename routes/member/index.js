const express = require('express');

const router = express.Router();
const Controller = require('./member.controller.js');

// get user list
router.get('/', Controller.getAllMember);

// get user
router.get('/:mem_id', Controller.getMember);

// get user id
router.get('/userid/:userid', Controller.getMemberUserId);

// get user email
router.get('/email/:email', Controller.getMemberEmail);

// create user
router.post('/', Controller.createMember);

// Delete user
router.delete('/:mem_id', Controller.deleteMember);

// update user
router.put('/:mem_id', Controller.updateMember);

module.exports = router;
