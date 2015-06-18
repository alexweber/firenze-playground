var config = require('./config');
var firenze = require('firenze/lib');

// Init db.
var db = new firenze.Database(config);
var Post = require('./model')(db);
var Posts = require('./collection')(db);

// Create table from model.
db.getAdapter().createTable(Post);

// Release db connection.
db.close();
