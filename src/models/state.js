const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class State {

    async create(req, res) {
        
        let state = req.body.name;

        try {
            const stateCreated = await prisma.estado.create({
                data: {
                    name: state
                }
            });
    
            res.json(stateCreated);    
        } catch (error) {
            console.log(error);
            res.json("Erro!");
        }
    }

    async update(req, res) {
        
        const id = Number(req.params.id);
        const newName = req.body.name;

        try {
            const state = await prisma.estado.update({
                where: { id },
                data: { name: newName }
            });
            res.json(state);
        } catch (error) {
            console.log(error);
            res.json("Erro!");
        }
    }

    async read(req, res) {
        
        try {
            const states = await prisma.estado.findMany();
            res.json(states);    
        } catch (error) {
            console.log(error);
            res.json("Erro!");
        }
    }

    async delete(req, res) {

        const id = Number(req.params.id);

        try {
            let stateDeleted = await prisma.estado.delete({
                where: { id }
            });
            res.json(stateDeleted);
        } catch (error) {
            console.log(error);
            res.json("Erro!");
        }
    }
}

module.exports = State;