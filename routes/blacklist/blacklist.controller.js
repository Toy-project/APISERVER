const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const Blacklist = require(path.join(__dirname, './blacklist.model.js'));

exports.getAllBlacklist = function(req, res, next) {
  console.log("get all blacklist list");

  const respond = results => {
    res.status(200).json(results);
  };

  const onError = err => {
    next(err);
  };
  
  Blacklist.findAll()
  .then(respond)
  .catch(onError);
};