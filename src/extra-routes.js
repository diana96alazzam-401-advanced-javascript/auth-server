'use strict';

const bearerAuth = require('../src/auth/middleware/bearer.js');
const router = require('./auth/router.js');

router.get('/secret', bearerAuth, bearerHandler);

function bearerHandler(req, res){
  res.json(req.user);
}

module.exports = router;


