const note_routes = require('./note_routes.js');

module.exports = function(app,db) {
  note_routes(app,db);
}
