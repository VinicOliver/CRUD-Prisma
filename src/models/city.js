const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class City {

    async create(name, id) {
        
        let id_state = parseInt(id);
        
        try {
            const cityCreated = await prisma.cidade.create({
                data: {
                    name: name,
                    state: { connect: { id: id_state } }
                }
            });
    
            return cityCreated;
        } catch (error) {
            console.log(error);
            return 'Erro';
        }
    }

    async update(id, name) {

        let city_id = Number(id);
        let newName = name;

        try {
            const city = await prisma.cidade.update({
                where: { id: city_id },
                data: { name: newName }
            });

            return city;
        } catch (error) {
            console.log(error);
            return 'Erro';
        }
    }

    async read() {

        try {
            const cities = await prisma.cidade.findMany({
                include: { state: true }
            });

            return cities;    
        } catch (error) {
            console.log(error);
            return 'Erro';
        }
    }

    async delete(id) {

        const city_id = Number(id);

        try {
            let cityDeleted = await prisma.cidade.delete({
                where: { city_id }
            });

            return cityDeleted;
        } catch (error) {
            console.log(error);
            return 'Erro';
        }
    }
}

module.exports = City;