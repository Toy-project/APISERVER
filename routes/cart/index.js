const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const Cart = require(path.join(__dirname, './cart.model.js'));
const Controller = require(path.join(__dirname, './cart.controller.js'));

const app = express();

// get all cart with mem_id
router.get('/get/:mem_id', Controller.getAllCartByMemId);

// create a cart
router.post('/', Controller.createCart);

// delete cart
router.delete('/:cart_id', Controller.removeCart);

module.exports = router;
