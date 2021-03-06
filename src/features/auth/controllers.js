const services = require('./services');
const Boom = require('boom');
const Validator = require('fastest-validator');
const jwt = require('jsonwebtoken');

const v = new Validator();

module.exports = {
  auth: async (req, res) => {
    const schema = {
      email: {max: 255, min: 5, type: 'string' },
      password: {max: 255, min: 5, type: 'string' }
    }

    const errors = v.validate(req.body, schema);

    if(Array.isArray(errors) && errors.length) {
      res.status = 400
      return res.json(Boom.badRequest(null, errors));
    }

    const user = await services.auth(req.body);

    if(user) {
      res.json({
        result: jwt.sign({email: user.email}, 'mysecret'),
      });
    } else {
      res.status = 401;
      res.json({ result: Boom.unauthorized() });
    }
  }
}
