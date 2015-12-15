var express = require('express');
var router = express.Router();
var works = require('../data/works')
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Home', works:works });
});
router.get('/works', function(req, res, next) {
	res.render('works/index', { title: 'Works' });
});
router.get('/works/:work', function(req, res, next){
	var work;
	for(var i=0; i < works.length; i++ ){
		if(req.params.work == works[i].title){
			work = works[i];
		}
	}
	res.render('works/show', { title:work.name ,work: work });
});

module.exports = router;