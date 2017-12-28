const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Cart = require(path.join(__dirname, './cart.model.js'));

const app = express();

// get all cart with mem_id
router.get('/:id', function(req, res, next){
  console.log("get all Carts");
  Cart.findAll({
    where: {
      mem_id: req.params.id
    }
  })
  .then(results => {
    res.status(200).json(results);
  })
  .catch(err => {
    res.send(err);
  });
});

// get a specific Cart with mem_id, club_id
router.get('/:mid/:cid', function(req, res, next) {
  console.log("get a specific Cart");
  Cart.find({
    where: {
      mem_id: req.params.mid,
      club_id: req.params.cid
    },
  })
  .then(result => {
    res.status(200).json(results);
  })
  .catch(err => {
    res.send(err);
  });
});

// create a cart
router.post('/:mid/:cid', function(req, res, next){
  console.log("Create a cart/:" + req.params.mid + "/:" + req.params.cid);

  Cart.create({
    mem_id: req.params.mid,
    club_id: req.params.cid
  })
  .then(result => {
    res.status(201).json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

// delete cart
router.delete('/:id', function(req, res, next) {
  console.log("Remove a cart");
  Cart.destroy({
    where: {
      cart_id: req.params.id,
    }
  })
  .then(result => {
    res.send(201);
  })
  .catch(err => {
    res.send(err);
  });
});

module.exports = router;
