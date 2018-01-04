const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const Cart = require(path.join(__dirname, './cart.model.js'));

exports.getAllCartByMemId = (req, res, next) => {
  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Cart.findOne({
    where : {
      mem_id : req.params.mem_id
    }
  })
  .then(respond)
  .catch(onError);
};

exports.createCart = (req, res, next) => {

  const createList = {
    mem_id: req.body.mem_id,
    club_id:  req.body.club_id
  };

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Cart.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteCart = (req, res, next) => {

  const respond = (results) => {
    if(results) {
      Cart.destroy({
        where : {
          cart_id : req.params.cart_id
        }
      })
      .then(results => {
        res.send(200);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  const onError = (err) => {
    next(err);
  };

  Cart.findById(req.params.cart_id)
  .then(respond)
  .catch(onError);
};
