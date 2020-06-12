'use strict';
const {server} = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Basic auth middleware', () => {

  it('can send the basic header', () => {
  });
  it('the routes assert the requirements (signup/signin)', () => {
  });
});
