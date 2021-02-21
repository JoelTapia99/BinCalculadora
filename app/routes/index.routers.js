const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.controller');
// declaracion de rutas

router.get('/', controllers.home);

router.post('/calcularBinario', controllers.calcularBinario);
router.post('/calcularDecimal', controllers.calcularDecimal);


// exportacion del modulo de rutas 
module.exports = router;

