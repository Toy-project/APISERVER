const error = require('../../helper/errorHandler');
const nexmoInfo = require('../config/nexmo.json');
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  nexmoInfo.apiKey,
  nexmoInfo.apiSecret
});



exports.postVerify = (req, res, next) => {
  res.send('hello');
  // const data = {
  //   number : req.body.number,
  //   brand : nexmoHelper.brand,
  // }
  // Nexmo.verify.request(data, (err, result) => {
  //   if(err) { next(err); }
  //   else {
  //     res.status(201).json(result);
  //   }
  // });
};

exports.postCheck = (req, res, next) => {
  res.send('hello');
  // const data = {
  //   request_id : req.body.request_id,
  //   code : req.body.code,
  // }
  // Nexmo.verify.check(data, (err, result) => {
  //   if(err) { next(err); }
  //   else {
  //     res.status(201).json(result);
  //   }
  // });
};
