const express = require('express');
const path = require('path');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(swaggerUi.serve, swaggerUi.setup(null, null, null, null, null));
});

module.exports = router;
