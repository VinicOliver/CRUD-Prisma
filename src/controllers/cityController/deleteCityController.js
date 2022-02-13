const City = require('../../models/city.js');

const city = new City();

async function deleteCity(req, res) {
    let id = req.params.id;

    let cityDeleted = await city.delete(id);
    res.send(cityDeleted);
}

module.exports = {deleteCity};