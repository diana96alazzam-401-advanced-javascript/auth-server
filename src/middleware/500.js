'use strict';

/**
 * internal server (500) error middle ware module 
 * @module serverError 
 */

module.exports = (err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error!!';
  res.json({ error: err });
};