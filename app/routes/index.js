const bubbleRoutes = require('./bubble_routes.js');
const registerRoutes = require('./register_routes.js');
const loginRoutes = require('./login_routes.js');

module.exports = function(app,db){
  bubbleRoutes(app,db);
  registerRoutes(app,db);
  loginRoutes(app,db);
}
