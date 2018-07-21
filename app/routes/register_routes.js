var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var VerifyToken = require('../auth/verifyToken');

module.exports = function(app, db) {

  app.post('/register', (req, res) => {

    const details = {
      'email': req.body.email
    };
    db.collection('users').findOne(details, (err, item) => {
      if (err)
        return res.send({'error': 'Cannot create user :('});
      if (item != undefined)
        return res.send({'error': 'User already exists'});
      var hashedPassword = bcrypt.hashSync(req.body.password, 8);
      const user = {
        'email': req.body.email,
        'username': req.body.username,
        'password': hashedPassword
      };
      db.collection('users').insert(user, (err, result) => {
        if (err) {
          return res.send({'error': 'Cannot create user :('});
        } else {
          var token = jwt.sign({
            id: 'asd'
          }, process.env.tokenSecret, {
            expiresIn: 86400 // expires in 24 hours
          });
          return res.status(201).send({auth: true, token: token})
        }
      })
    });
  });
  app.get('/register', VerifyToken, (req, res) => {
    res.send(200);
  });

}
