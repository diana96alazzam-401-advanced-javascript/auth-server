'use strict';
const {server} = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);


describe('Router',()=>{
  it('can POST to /signup to create a new user', ()=>{
    let data = {
      username: 'diana1',
      password: '1234'};
    return mockRequest.post('/signup').send(data).then(user=>{
      expect(user.status).toEqual(200);
    });
  });
  it('can POST to /signup to create a new user and return the correct username', ()=>{
    let data = {
      username: 'diana2',
      password: '1234'};
    return mockRequest.post('/signup').send(data).then(user=>{
      expect(user.body.user.username).toEqual(data.username);
    });
  });
  it('can POST to /signup to create a new user and return a token', ()=>{
    let data = {
      username: 'diana3',
      password: '1234'};
    return mockRequest.post('/signup').send(data).then(user=>{
      expect(user.body.token).toBeTruthy();
    });
  });
});