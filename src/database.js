import Database from 'firenze/lib/Database';
import MySQL from 'firenze-adapter-mysql';

let db = new Database({
	adapter: MySQL,
  // host: '127.0.0.1',
  host: 'localhost',
  port: 8889,
  database: 'demo_firenze',
  user: 'demo',
  password: 'demo',
  pool: {
    min: 0,
    max: 1
  }
});

export default db;
