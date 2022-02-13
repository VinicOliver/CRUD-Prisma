const City = require('../../models/city.js');

const city = new City();

async function updateCity(req, res) {
    let id = req.params.id;
    let { name } = req.body;

    let upCity = await city.update(id, name);
    res.send(upCity);
}

module.exports = {updateCity};