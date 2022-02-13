const State = require('../../models/state.js');

const state = new State();

async function deleteState(req, res) {
    let id = req.params.id;

    let stateDeleted = await state.delete(id);
    res.send(stateDeleted);
}

module.exports = {deleteState};