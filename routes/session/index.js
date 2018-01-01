const express = require('express');
const path = require('path');

const router = express.Router();
const Controller = require(path.join(__dirname, './session.controller.js'));

//Get All Session
router.get('/', Controller.GetAllSession);

//Get a Session
router.get('/:session_id', Controller.GetSession);

//Create a session
router.post('/', Controller.createSession);

//Update a session
router.put('/:session_id', Controller.updateSession);

//Remove a session
router.delete('/:session_id', Controller.removeSession);

// // delete session
// router.delete('/:session_id', function(req, res, next) {
//   console.log("Remove a session");
//   Session.destroy({
//     where: {
//       session_id: req.params.session_id,
//     }
//   })
//   .then(result => {
//     res.send(201);
//   })
//   .catch(err => {
//     res.send(err);
//   });
// });
//
// // update session
// router.put('/:session_id', function(req, res, next) {
//   // update list
//   let updateList = {
//     ip_address: req.body.ip_address,
//     user_agent: req.body.user_agent
//     //...
//   };
//
//   Session.update(updateList, {
//     where: {
//       session_id: req.params.session_id,
//     }
//   })
//   .then(result => {
//     res.status(201).json(result);
//   });
// });

module.exports = router;
