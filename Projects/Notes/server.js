const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const port = 48082;
const path = './app/routes';
const dbConnect = require('./config/db');

app.use(bodyParser.json());

mongoClient.connect(dbConnect.url, (err, db) => {
  if (err) return console.log(err)
  require(path)(app, db);
  app.listen(port);
})

//
// app.listen(port, function(){
//   //console.log("Hello world");
// });
