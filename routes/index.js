var express = require('express');
var router = express.Router();
const librosController = require("../controllers/librosController")


/* GET home page. */
router.get('/', function(req, res,next){
    res.render('index');

});

router.get('/especial', function(req, res,next){
    res.render('especial');

});

router.get('/menu', function(req, res,next){
    res.render('menu');

});

router.get('/cafeFrio', function(req, res,next){
    res.render('cafeFrio');

});

router.get('/bebidasAlcoholicas', function(req, res,next){
    res.render('bebidasAlcoholicas');

});

router.get('/entradas', function(req, res,next){
    res.render('entradas');

});

router.get('/platosFuertes', function(req, res,next){
    res.render('platosFuertes');

});

router.get('/contacto', function(req, res,next){
    res.render('contacto');

});


module.exports = router;
