const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const Cart = require(path.join(__dirname, './cart.model.js'));

exports.getAllCartByMemId = (req, res, next) => {
  console.log("get all cart with mem_id");
  const mem_id = req.params.mem_id;

  const respond = (results) => {
    res.status(200).json(results);
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
  console.log("Create a cart");

  const { mem_id, club_id } = req.body;

  const respond = (result) => {    
    res.status(200).json(result);
  };

  const onError = (err) => {
    next(err);
  };

  Cart.create({
    mem_id: req.body.mem_id,
    club_id: req.body.club_id
  })
  .then(respond)
  .catch(onError);
};

exports.deleteCart = (req, res, next) => {
  console.log("Remove a cart");

  const cart_id = req.params.cart_id;

  const respond = (result) => {
    res.status(201).json(result);
  };

  const onError = (err) => {
    next(err);
  };

  Cart.destroy({
    where : {
      cart_id : cart_id
    }
  })
  .then(respond)
  .catch(onError);
};
