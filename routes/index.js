var express = require('express');
var router = express.Router();
var works = require('../data/works')
var careers = require('../data/careers')

router.get('/', function(req, res, next) {
	var allworks = [];
	for(var i of works){
		if(i.main){
			allworks.push(i)
		}
	}
	res.render('index', { title: 'Home', works:allworks });
});
router.get('/work', function(req, res, next) {
	res.render('works/index', { title: 'Work', works:works });
});
router.get('/work/:work', function(req, res, next){
	var work;
	for(var w of works){
		if(req.params.work == w.title){
			work = w
		}
	}
	res.render('works/show', { title:work.name ,work: work });
});
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'About' });
});
router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'Contact' });
});
router.get('/career', function(req, res, next) {
	res.render('careers/index', { title: 'Career', careers:careers });
});
router.get('/career/:career', function(req, res, next) {
	var career;
	var location;
	for(var c of careers){
		for(var job of c.jobs){
			if(job.slug == req.params.career){
				location = c.title
				career = job
			}
		}
		
	}
	res.render('careers/show', { title: career.title, career:career, location:location });
});
router.get('/news', function(req, res, next) {
	res.render('news', { title: 'News' });
});
module.exports = router;