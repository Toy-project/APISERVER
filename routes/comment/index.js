const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Comment = require(path.join(__dirname, './comment.model.js'));
const Controller = require(path.join(__dirname, './comment.controller.js'));

// get a sepecific comment with club_id
router.get('/club/:club_id', Controller.GetCommentByClubId);

// get a sepecific comment with mem_id
router.get('/member/:mem_id', Controller.GetCommentByMemId);

// get a sepecific comment with mem_id and club_id
router.get('/:mem_id/:club_id', Controller.GetCommentByMemIdClubId);

// create a comment
router.post('/', Controller.createComment);

router.put('/:comment_id', Controller.updateComment);

router.delete('/:comment_id', Controller.removeComment);

module.exports = router;
