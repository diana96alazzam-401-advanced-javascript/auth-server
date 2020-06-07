'use strict';

/**
 * 404 error middle ware module 
 * @module notFound
 */

module.exports = (req, res, next) => {
  res.status(404);
  res.statusMessage = 'Not Found';
  res.json({ error: 'Not Found' });
};