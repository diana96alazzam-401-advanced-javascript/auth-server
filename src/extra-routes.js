'use strict';

const bearerAuth = require('../src/auth/middleware/bearer.js');
const router = require('./auth/router.js');
const permissions = require('./auth/middleware/authorize.js');

router.get('/secret', bearerAuth, bearerHandler);
router.get('/read', bearerAuth, permissions('read'), readHandler);
router.post('/add', bearerAuth, permissions('create'), addHandler);
router.put('/change', bearerAuth, permissions('update'), putHandler);
router.delete('/remove', bearerAuth, permissions('delete'), deleteHandler);

function bearerHandler(req, res){
  res.json(req.user);
}
function readHandler(req, res){
  res.send('Read route OK!');
}
function addHandler(req, res){
  res.send('add route OK!');
}
function putHandler(req, res){
  res.send('change route OK!');
}
function deleteHandler(req, res){
  res.send('delete route OK!');
}

module.exports = router;


