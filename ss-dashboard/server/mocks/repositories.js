module.exports = function(app) {
  var express = require('express');
  var repositoriesRouter = express.Router();
  repositoriesRouter.get('/', function(req, res) {
    res.send({"repositories":[]});
  });
  app.use('/api/repositories', repositoriesRouter);
};
