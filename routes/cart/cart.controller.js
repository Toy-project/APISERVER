const error = require('../../helper/errorHandler');
const Cart = require('./cart.model.js');

exports.getAllCartByMemId = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  Cart.findAndCountAll({
    where: {
      mem_id: req.params.mem_id,
    },
    offset: req.params.start,
    limit: req.params.end,
  })
  .then(respond)
  .catch(onError);
};

exports.createCart = (req, res, next) => {
  const createList = {
    mem_id: req.body.mem_id,
    club_id: req.body.club_id,
  };

  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  Cart.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteCart = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (num) => {
    if (num) {
      Cart.destroy({
        where: {
          cart_id: req.params.cart_id,
        },
      })
      .then((result) => {
        res.send(200);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Cart.findById(req.params.cart_id)
  .then(respond)
  .catch(onError);
};
