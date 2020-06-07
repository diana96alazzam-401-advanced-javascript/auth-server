'use strict';
const {server} = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('500 internal server error Middleware', () => {

  it('status 500 and a status message (Server Error!!)', () => {
  });
});
