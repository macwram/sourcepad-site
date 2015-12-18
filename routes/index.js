var express = require('express');
var router = express.Router();
var works = require('../data/works')

router.get('/', function(req, res, next) {
	var allworks = [];
	for(var i=0; i < works.length; i++ ){
		if(works[i].main){
			allworks.push(works[i])
		}
	}
	res.render('index', { title: 'Home', works:allworks });
});
router.get('/work', function(req, res, next) {
	res.render('works/index', { title: 'Works', works:works });
});
router.get('/work/:work', function(req, res, next){
	var work;
	for(var i=0; i < works.length; i++ ){
		if(req.params.work == works[i].title){
			work = works[i];
		}
	}
	res.render('works/show', { title:work.name ,work: work });
});

module.exports = router;