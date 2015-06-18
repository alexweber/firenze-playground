var MySQL = require('firenze-adapter-mysql');

module.exports = {
	adapter: MySQL,
  host: 'localhost',
  port: 8889,
  database: 'demo_firenze',
  user: 'demo',
  password: 'demo',
  pool: {
    min: 0,
    max: 1
  }
};
