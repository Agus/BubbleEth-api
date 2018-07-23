const bubbleRoutes = require('./bubble_routes.js');
const registerRoutes = require('./register_routes.js');
const loginRoutes = require('./login_routes.js');
const requireToken = require('./requireToken.js');

module.exports = function(app,db){
  loginRoutes(app,db);
  // REQUIRE TOKEN FROM THIS POINT
  requireToken(app);
  bubbleRoutes(app,db);
  registerRoutes(app,db);
}
