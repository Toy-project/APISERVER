const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const Cart = require(path.join(__dirname, './cart.model.js'));

exports.getAllCartByMemId = (req, res, next) => {
  const mem_id = req.params.mem_id;

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Cart.findAll({
    where : {
      mem_id : mem_id
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

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Cart.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteCart = (req, res, next) => {

  const respond = (result) => {
    if(result) {
      Cart.destroy({
        where : {
          cart_id : req.params.cart_id
        }
      })
      .then(result => {
        res.send(200);
      })
      .catch(err => {
        next(err);
      });
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
