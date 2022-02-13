const City = require('../../models/city.js');

const city = new City();

async function createCity(req, res) {
    let { name, id } = req.body;

    let newCity = await city.create(name, id);
    res.send(newCity);
}

module.exports = {createCity};