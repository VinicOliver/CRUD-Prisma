const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class City {

    async create(req, res) {
        
        let newCity = req.body.name;
        
        try {
            const cityCreated = await prisma.cidade.create({
                data: {
                    name: newCity,
                    state: { connect: { id: 2 } }
                }
            });
    
            res.json(cityCreated);
        } catch (error) {
            console.log(error);
            res.send('Erro');
        }
    }

    update(req, res) {
        res.send('Cidade atualizada com sucesso!');
    }

    async read(req, res) {

        try {
            const cities = await prisma.cidade.findMany({
                include: { state: true }
            });

            res.json(cities);    
        } catch (error) {
            console.log(error);
            res.json("Erro!");
        }
    }

    async delete(req, res) {

        const id = Number(req.params.id);

        try {
            let cityDeleted = await prisma.cidade.delete({
                where: { id }
            });

            res.json(cityDeleted);
        } catch (error) {
            console.log(error);
            res.json("Erro!");
        }
    }
}

module.exports = City;