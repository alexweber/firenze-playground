module.exports = function (db) {
  return db.createModelClass({
    alias: 'Post',

    displayField: 'title',

    schema: {
      id: {
        type: 'increments'
      },
      title: {
        type: 'string'
      },
      body: {
        type: 'text'
      },
    },

    collectionClass: function () {
      return require('./collection')(db);
    }
  });
};
