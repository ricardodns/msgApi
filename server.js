var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Message = require('./api/models/msgModel'),
  bodyParser = require('body-parser');

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/msgdb';

console.log(uristring);
mongoose.Promise = global.Promise;
mongoose.connect(uristring);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test', function(req, res) { res.json({data : 'hello'});})

var routes = require('./api/routes/msgRoutes');
routes(app);

var server = app.listen(port, function () {
  var port = server.address().port;
  console.log('Message RESTful API server started on: ' + port);
});
