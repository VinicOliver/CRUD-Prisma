const State = require('../../models/state.js');

const state = new State();

async function createState(req, res) {
    let { name } = req.body;

    let newState = await state.create(name);
    res.send(newState);
}

module.exports = {createState};