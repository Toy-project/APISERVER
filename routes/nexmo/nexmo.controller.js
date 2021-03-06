const Nexmo = require('nexmo');

const asset = require('../../config/nexon.json');

const nexmo = new Nexmo(asset);

exports.postVerify = (req, res, next) => {
  const data = {
    number: req.body.number,
    brand: req.body.brand,
    code_length: '6',
    pin_expiry: 120,
  };

  nexmo.verify.request(data, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.status(201).json(result);
    }
  });
};

exports.postCheck = (req, res, next) => {
  const data = {
    request_id: req.body.request_id,
    code: req.body.code,
  };

  nexmo.verify.check(data, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.status(201).json(result);
    }
  });
};

exports.getCancel = (req, res, next) => {
  const data = {
    request_id: req.params.request_id,
    cmd: 'cancel',
  };

  nexmo.verify.control(data, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.status(201).json(result);
    }
  });
};
