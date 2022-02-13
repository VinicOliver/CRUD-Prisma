const State = require('../../models/state.js');

const state = new State();

async function readState(req, res) {
    let AllStates = await state.read();
    res.send(AllStates);
}

module.exports = {readState};