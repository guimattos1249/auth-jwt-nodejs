const db = require('../../../models/');

module.exports = {
  auth: payload => db.User.findOne({ where: payload })
}
