const express = require('express');
const stateController = require('./controllers/stateController/stateController.js');
const cityController = require('./controllers/cityController/cityController.js');

const router = express.Router();

// Rotas de estado

/*
router.get('/registrar-estado', stateController.createState);
router.get('/atualizar-estado/:id', stateController.updateState);
router.get('/estados', stateController.readState);
router.get('/excluir-estado/:id', stateController.deleteState);
*/

// Rotas de cidade

/*
router.get('/registrar-cidade', cityController.createCity);
router.get('/atualizar-cidade/:id', cityController.updateCity);
router.get('/cidades', cityController.readCity);
router.get('/excluir-cidade/:id', cityController.deleteCity);
*/

// Rotas de estado

router.post('/registrar-estado', stateController.createState);
router.get('/estados', stateController.readState);
router.put('/atualizar-estado/:id', stateController.updateState);
router.delete('/excluir-estado/:id', stateController.deleteState);

// Rotas de cidade

router.post('/registrar-cidade', cityController.createCity);
router.put('/atualizar-cidade/:id', cityController.updateCity);
router.get('/cidades', cityController.readCity);
router.delete('/excluir-cidade/:id', cityController.deleteCity);


module.exports = router;