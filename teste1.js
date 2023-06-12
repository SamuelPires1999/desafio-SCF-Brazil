const data =  require("./fakeData");
const zod = require('zod');
const { teste1Schema } = require("./schemas");

const getUser = ( req, res, next ) => {
    try {
        const validated = teste1Schema.parse(req.query.name)

        // Podemos utilizar o metodo find para retornar diretamente o nome pesquisado
        // Este metodo retorna o primeiro item onde dada expressao e verdadeira, no nosso caso, 
        // onde o nome do item e igual ao nome passado na query.
        const target = data.find(item => item.name == validated)
    
        if(!target) {
            return res.send("User not found")
        }
    
        //Incrementando o count como pedido no teste5
        target.count++
    
        return res.send(target)
    } catch (error) {
        res.status(400).send(error)
    }

};

const getUsers = ( req, res, next ) => {
    
    return res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};