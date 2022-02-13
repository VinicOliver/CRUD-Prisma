const City = require('../../models/city.js');

const city = new City();

async function readCity(req, res) {
    let AllCities = await city.read();
    res.send(AllCities);
}

module.exports = {readCity};