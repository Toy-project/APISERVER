const express = require('express');

const router = express.Router();
const Controller = require('./cart.controller');

// get all cart with mem_id
router.get('/:mem_id', Controller.getAllCartByMemId);

// create a cart
router.post('/', Controller.createCart);

// delete cart
router.delete('/:cart_id', Controller.deleteCart);

module.exports = router;
