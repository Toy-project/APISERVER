const path = require('path');
const Cart = require(path.join(__dirname, './cart.model.js'));

exports.getAllCart = (req, res, next) => {
  console.log("get all cart with mem_id")
  const mem_id = req.params.mem_id;

  const respond = (results) => {
    res.status(200).json(results);
  }

  const onError = (err) => {
    res.status(500).json({
      message: err.message
    })
  }

  Cart.findAllCartByMemId(mem_id)
  .then(respond)
  .catch(onError)
}
