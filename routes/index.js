var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/works', function(req, res, next) {
  res.render('works/index', { title: 'Works' });
});
router.get('/works/:work', function(req, res, next) {
	var work = req.params.work.charAt(0).toUpperCase() + req.params.work.slice(1);
  res.render('works/show', { title: work });
});

module.exports = router;
