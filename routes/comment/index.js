const express = require('express');

const router = express.Router();
const Controller = require('./comment.controller.js');

// get a sepecific comment with club_id
router.get('/club/:club_id', Controller.getCommentByClubId);

// get a sepecific comment
router.get('/writer/:wrtier', Controller.getCommentByWriter);

// create a comment
router.post('/', Controller.createComment);

// update a comment
router.put('/:comment_id', Controller.updateComment);

// delete a comment
router.delete('/:comment_id', Controller.deleteComment);

module.exports = router;
