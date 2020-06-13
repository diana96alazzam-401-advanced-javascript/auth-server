'use strict';

// from GH docs Request a user's GitHub identity
const URL = 'https://github.com/login/oauth/authorize';
// needed query string
const options = {
  client_id: 'e178bfb010f5fd6be66d', //required!!
  scope: 'public_repo',
  state: '401lab',
};
// converting the obj to string and formatting the resulting string
const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
  })
  .join('&');

// making the full url
const authUrl = `${URL}?${queryString}`;
const link = document.getElementById('oauth');
link.setAttribute('href', authUrl);
