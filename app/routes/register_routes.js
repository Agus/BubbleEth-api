var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var VerifyToken = require('../auth/verifyToken');

module.exports = function(app, db) {

  app.post('/register', (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    var token = jwt.sign({
      id: 'asd'
    }, process.env.tokenSecret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(201).send({auth: true, token: token})
  })

  app.get('/register', VerifyToken, (req, res) => {
    res.send(200);
  });

}
