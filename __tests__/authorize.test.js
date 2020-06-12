'use strict';
const {server} = require('../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Access control list', () => {

  it('regular user user can read only)', () => {
  });
  it('regular user get (200) from /read route)', () => {
  });
  it('regular user get (500) from /add, /change and /remove route)', () => {
  });

  it('writer can read and add)', () => {
  });
  it('writer get (200) from /read and /add routes)', () => {
  });
  it('writer get (500) from /change and /remove routes)', () => {
  });

  it('editor can read, add and change)', () => {
  });
  it('editor get (200) from /read, /add and /change routes)', () => {
  });
  it('editor get (500) from /remove routes)', () => {
  });

  it('admin can read, add, change and remove)', () => {
  });
  it('editor get (200) from /read, /add, /change and remove routes)', () => {
  });

});
