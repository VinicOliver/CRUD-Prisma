const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class State {

    async create(name) {
        
        let state = name;

        try {
            const stateCreated = await prisma.estado.create({
                data: {
                    name: state
                }
            });
    
            return stateCreated;   
        } catch (error) {
            console.log(error);
            return 'Erro';
        }
    }

    async update(id, name) {
        
        const state_id = parseInt(id);
        const newName = name;

        try {
            const state = await prisma.estado.update({
                where: { id: state_id },
                data: { name: newName }
            });

            return state;
        } catch (error) {
            console.log(error);
            return 'Erro';
        }
    }

    async read() {
        
        try {
            const states = await prisma.estado.findMany();

            return states;    
        } catch (error) {
            console.log(error);
            return 'Erro';
        }
    }

    async delete(id) {
        const state_id = parseInt(id);

        try {
            let stateDeleted = await prisma.estado.delete({
                where: { id: state_id }
            });

            return stateDeleted;
        } catch (error) {
            console.log(error);
            return 'Erro';
        }
    }
}

module.exports = State;