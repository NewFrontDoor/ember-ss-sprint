module.exports = function(app) {
  var express = require('express');
  var repositoriesRouter = express.Router();
  repositoriesRouter.get('/', function(req, res) {
    res.send({"repositories":[
        {
          name:'V100ITConfiguration',
          description: 'Vision 100 IT Configuration'
        },
        {
          name:'V100ITDocuments',
          description: 'Vision 100 IT Documents'
        }
      ]});
  });
  app.use('/api/repositories', repositoriesRouter);
};
