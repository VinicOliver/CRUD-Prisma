const State = require('../../models/state.js');

const state = new State();

function createState(req, res) {
    state.create(req, res);
}

function updateState(req, res) {
    state.update(req, res);
}

function deleteState(req, res) {
    state.delete(req, res);
}

function readState(req, res) {
    state.read(req, res);
}

module.exports = {
    createState,
    updateState,
    deleteState,
    readState
};