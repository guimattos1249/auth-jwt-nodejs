const Boom = require('boom');
const Validator = require('fastest-validator');

const services = require('./services');

const v = new Validator();

module.exports = {
  create: async (req, res) => {
    const schema = {
      firstName: {max: 60, min: 5, type: 'string' },
      lastName: {max: 60, min: 5, type: 'string' },
      email: {max: 255, min: 5, type: 'string' },
      password: {max: 255, min: 5, type: 'string' }
    }

    const errors = v.validate(req.body, schema);

    if(Array.isArray(errors) && errors.length) {
      res.status = 400
      return res.json(Boom.badRequest(null, errors));
    }

    const user = await services.create(req.body);

    res.json(user);
  }
}
