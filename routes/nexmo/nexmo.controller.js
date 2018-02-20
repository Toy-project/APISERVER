const error = require('../../helper/errorHandler');
const nexmoHelper = require('../../helper/nexmoHelper');
const Nexmo = require('../../config/nexmo');
//
// exports.postVerify = (req, res, next) => {
//   const data = {
//     number : req.body.number,
//     brand : nexmoHelper.brand,
//   }
//   Nexmo.verify.request(data, (err, result) => {
//     if(err) { next(err); }
//     else {
//       res.status(201).json(result);
//     }
//   });
// };
//
// exports.postCheck = (req, res, next) => {
//   const data = {
//     request_id : req.body.request_id,
//     code : req.body.code,
//   }
//   Nexmo.verify.check(data, (err, result) => {
//     if(err) { next(err); }
//     else {
//       res.status(201).json(result);
//     }
//   });
// };
