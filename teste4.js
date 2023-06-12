const data =  require("./fakeData");
const { teste4Schema } = require("./schemas");

module.exports =  function(req, res) {
    try {
        const validated = teste4Schema.parse(req.query.id)

        // Primeiro encontramos o usuario com dado Id, lembrando de converter para Number pois 
        // query params sao string por padrao
        const objectToUpdate = data.find(item => item.id === Number(validated));

        // Setamos as novas propriedades em um novo objeto, e utilizamos spread operator para manter todas as outras propriedades
        // que nao foram sobrescritas como Id
        const updatedProperties = {
            ...objectToUpdate,
            name: req.body.name,
            job: req.body.job,
        }

        if (objectToUpdate) {
            // Atualizamos as propriedades do objeto encontrado e utilizamos Object.assign para sobrescrever
        Object.assign(objectToUpdate, updatedProperties);
        } else {
            return res.send("User not found")
        }

        return res.send(objectToUpdate);
    } catch (error) {
        return res.status(400).json(error)
    }

};