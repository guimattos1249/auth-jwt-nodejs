const controller = require('./controller');

module.exports = routes => {
  routes.post('/v1/api/user', controller.create);
}
