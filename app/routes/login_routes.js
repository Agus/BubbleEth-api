var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

module.exports = function(app, db) {

  app.post('/login', (req, res) => {
    var fakePassword = bcrypt.hashSync('asd')
    var passwordIsValid = bcrypt.compareSync(req.body.password, fakePassword);
    if (!passwordIsValid)
      return res.status(401).send({auth: false, token: null});
    var token = jwt.sign({
      id: 'asd'
    }, process.env.tokenSecret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({auth: true, token: token});
  });

  app.get('/logout', function(req, res) {
    res.status(200).send({auth: false, token: null});
  });

}
