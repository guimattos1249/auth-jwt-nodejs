const authRoutes = require('../features/auth/routes');
const userRoutes = require('../features/user/routes');

module.exports = routes => {
  authRoutes(routes);
  userRoutes(routes);
}
