const db = require('../../../models');

module.exports ={
  create: payload => db.User.create(payload)
}
