const City = require('../../models/city.js');

const city = new City();

function createCity(req, res) {
    city.create(req, res);
}

function updateCity(req, res) {
    city.update(req, res);
}

function deleteCity(req, res) {
    city.delete(req, res);
}

function readCity(req, res) {
    city.read(req, res);
}

module.exports = {
    createCity,
    updateCity,
    deleteCity,
    readCity
};