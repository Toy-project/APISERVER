const express = require('express');

const router = express.Router();
const Controller = require('./comment.controller.js');

// get a sepecific comment with club_id
router.get('/club/:club_id', Controller.getCommentByClubId);

// get a sepecific comment with mem_id
router.get('/member/:mem_id', Controller.getCommentByMemId);

// get a sepecific comment with mem_id and club_id
router.get('/:mem_id/:club_id', Controller.getCommentByMemIdClubId);

// create a comment
router.post('/', Controller.createComment);

// update a comment
router.put('/:comment_id', Controller.updateComment);

// delete a comment
router.delete('/:comment_id', Controller.deleteComment);

module.exports = router;
