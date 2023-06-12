const data =  require("./fakeData");
const { teste2Schema } = require("./schemas");

module.exports = function(req, res){
    try {
            // O Codigo deste caso nao atenderia o esperado pois a propriedade job estava sendo inserida com o nome errado.
        // Alem de que a propriedade ID nao era informada, considerando que estamos trabalhando com um array estatico, temos que informa-la para manter o padrao dos objetos ja inseridos.

        const validated = teste2Schema.parse(req.body)
        
        const newUser = {
            ...validated,  role: "USER", count: 0
        }

        data.push(newUser)
        
        return res.send(newUser);
    } catch (error) {
        res.status(400).json(error)
    }

};