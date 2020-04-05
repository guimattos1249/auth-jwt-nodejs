const express = require('express');

const applyRoutes = require('./routes');

const routes = express.Router();

const app = express();

module.exports = () => {
  applyRoutes(routes);

  app.use(routes);

  app.listen(3000, () => {
    console.log('Server Online');
  });
}
