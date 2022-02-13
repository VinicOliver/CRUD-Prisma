const express = require('express');
const router = express.Router();

// City's Controllers
const createCityController = require('./controllers/cityController/createCityController.js');
const findCityController = require('./controllers/cityController/findCityController.js');
const deleteCityController = require('./controllers/cityController/deleteCityController.js');
const updateCityController = require('./controllers/cityController/updateCityController.js');

// State's Controllers
const createStateController = require('./controllers/stateController/createStateController.js');
const findStateController = require('./controllers/stateController/findStateController.js');
const deleteStateController = require('./controllers/stateController/deleteStateController.js');
const updateStateController = require('./controllers/stateController/updateStateController.js');

// Rotas de estado

router.post('/estado', createStateController.createState);
router.get('/estado', findStateController.readState);
router.put('/estado/:id', updateStateController.updateState);
router.delete('/estado/:id', deleteStateController.deleteState);

// Rotas de cidade

router.post('/cidade', createCityController.createCity);
router.get('/cidade', findCityController.readCity);
router.put('/cidade/:id', updateCityController.updateCity);
router.delete('/cidade/:id', deleteCityController.deleteCity);


module.exports = router;