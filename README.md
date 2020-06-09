# Auth-server

### Author: Diana Alazzam 

### Links and Resources

- [Pull request](https://github.com/diana96alazzam-401-advanced-javascript/auth-server/pull/3)
- [ci/cd](https://github.com/diana96alazzam-401-advanced-javascript/auth-server/actions) (GitHub Actions)
- [back-end server url](https://auth-app-401.herokuapp.com/)
<!-- - [documentation](https://auth-server-amman-401d2.herokuapp.com/docs) -->



### Setup

#### `.env` requirements
- `PORT` - 3000
- `MONGODB_URI` - `mongodb://localhost:27017/authserver`
- `CLIENT_ID` - `e178bfb010f5fd6be66d`
- `CLIENT_SECRET` - `f2a2782669b64bc57f534905c1a8f86f141a6c29`
- `API_SERVER` - `http://localhost:3000/oauth`
<!-- - `MONGODB_URI` - `mongodb://heroku_6xb6gz1d:vau5fnoq3pn7gd7pu9ujdjknap@ds135384.mlab.com:35384/heroku_6xb6gz1d` -->

<!-- - documentation route `/docs` -->

#### Routes
- `/signup`:
  * POST: send username and password 
- `/signin`
  * POST: send username and password with basic authentication
- `/users`
  * GET: get all users from database
- `/oauth`
  * GET: sign in and up with github
- Extra routes for testing:
  * `/secret`

#### How to initialize/run this application

- `nodemon`
- `npm start`


#### Tests

- `npm run lint`
- `npm test`


#### UML

- ![UML](./assets/wsl.jpg)
