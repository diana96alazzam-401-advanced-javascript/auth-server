'use strict';
const {server} = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Routes testing', () => {

  it('POST to /signup to create a new user', () => {
  });
  it('POST to /signin to login as a user (use basic auth)', () => {
  });
});
