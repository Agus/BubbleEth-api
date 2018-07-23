var verifyToken = require('../auth/verifyToken');

module.exports = function(app){
  app.all('*',(req,res,next)=>{
    return verifyToken(req,res,next);    
  });
}
