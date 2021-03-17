const express = require('express');
const router = express.Router();
 
router.get('/', (req,res) => {
    res.render("index")
})

router.get('/menu', (req,res) => {
    res.render("menu")
})

router.get('/cafeFrio', (req,res) => {
    res.render("cafeFrio")
})

router.get('/bebidasAlcoholicas', (req,res) => {
    res.render("bebidasAlcoholicas")
})
router.get('/entradas', (req,res) => {
    res.render("entradas")
})
router.get('/platosFuertes', (req,res) => {
    res.render("platosFuertes")
})
router.get('/especial', (req,res) => {
    res.render("especial")
})
router.get('/contacto', (req,res) => {
    res.render("contacto")
})

module.exports = router;