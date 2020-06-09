'use strict';
const {server} = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Bearer-OAuth', () => {

  it('given a good token user is able to “log in”', () => {
    // const testUser = {
    //   'username':'diana',
    //   'password':'1234',      
    // };
    // return mockRequest.post('/signup').send(testUser).then((tokenObj)=>{
    //   return mockRequest.post('signin').set({Authorization: 'basic diana:1234'}).then((resToken)=>{
    //     console.log('inside test', resToken);
    //     Object.keys(resToken).forEach((key) => {
    //       expect(key).toEqual('token');
    //     });      
    //   });
    // });

  });
  it('Tokens can optionally be expired', () => {

  });
  it('Expired tokens do not allow a user to login', () => {

  });

});
