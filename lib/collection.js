module.exports = function (db) {
  return db.createCollectionClass({
    table: 'posts',

    modelClass: function () {
      return require('./model')(db);
    }
  });
};
