const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
// const db = require('./config/db')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
  if (process.env.dbUrl == undefined) {
    throw 'No db url';
  }
}

const port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(process.env.dbUrl, (err, database) => {
  if (err)
    return console.log(err);
  database = database.db('bubble-dev');
  require('./app/routes')(app, database);
})

app.listen(port, () => {
  console.log('DB url: ' + process.env.dbUrl);
  console.log('We are live on ' + port);
});

/* Use https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52 for token login */
