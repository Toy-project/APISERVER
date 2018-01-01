const path = require('path');
const Cart = require(path.join(__dirname, './cart.model.js'));

exports.getAllCartByMemId = (req, res, next) => {
  console.log("get all cart with mem_id");
  const mem_id = req.params.mem_id;

  const respond = (results) => {
    console.log("respond at getAllCartByMemId");
    res.status(200).json(results);
  }

  const onError = (err) => {
    console.log("onError at getAllCartByMemId");
    next(err);
  }

  Cart.findAll({
    where : {
      mem_id : mem_id
    }
  })
  .then(respond)
  .catch(onError)
}

exports.createCart = (req, res, next) => {
  console.log("Create a cart");

  const { mem_id, club_id } = req.body;

  const respond = (results) => {
    console.log("respond at createCart");
    res.status(200).json({
      isCreated : true
    });
  }

  const onError = (err) => {
    console.log("onError at createCart");
    next(err);
  }

  Cart.create({
    mem_id: req.body.mem_id,
    club_id: req.body.club_id
  })
  .then(respond)
  .catch(onError);
}

exports.removeCart = (req, res, next) => {
  console.log("Remove a cart");

  const cart_id = req.params.cart_id;

  const respond = (results) => {
    console.log("respond at removeCart");
    res.status(201).json({
      isDelete : true
    });
  }

  const onError = (err) => {
    console.log("onError at removeCart");
    next(err);
  }

  Cart.destroy({
    where : {
      cart_id : cart_id
    }
  })
  .then(respond)
  .catch(onError);
}
