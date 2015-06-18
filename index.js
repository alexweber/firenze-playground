var config = require('./lib/config');
var firenze = require('firenze/lib');

// Init db.
var db = new firenze.Database(config);
var Post = require('./lib/model')(db);
var Posts = require('./lib/collection')(db);

// Create table from model.
db.getAdapter().createTable(Post);

// saving.
var post = new Post({
  title: 'Hello World',
  body: 'blah...'
});

post.save().then(function (model) {
  console.log('Saved with ID: ' + model.get('id'));
}).catch(function (err) {
	console.error(err);
});

// finding
var posts = new Posts();
posts.find('first', {
  conditions: {
    id: 1
    // can also be prefixed with Model alias as:
    // 'Post.id': 1
  }
}).then(function (post) {
  // post in an instance of Model, with fetched data
  var title = post.get('title');

  // or convert to plain object
  var postObject = post.toObject();
  var title = postObject.title;

	console.log(postObject);
});

// Release db connection.
db.close();
