const bubbleRoutes = require('./bubble_routes.js');

module.exports = function(app,db){
  bubbleRoutes(app,db);
}
