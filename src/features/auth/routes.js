const controllers = require('./controllers');

module.exports = routes => {
  routes.post('/v1/api/auth', controllers.auth);
}
