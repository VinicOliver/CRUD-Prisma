const State = require('../../models/state.js');

const state = new State();

async function updateState(req, res) {
    let id = req.params.id;
    let { name } = req.body;

    let upState = await state.update(id, name);
    res.send(upState);
}

module.exports = {updateState};