const data =  require("./fakeData");
const { teste3Schema } = require("./schemas");

module.exports = function(req, res) {
    try {
          
        const validated = teste3Schema.parse(req.query.name)

        // Primeiro achamos a posicao onde o objeto contendo este nome esta posicionado.
        const index = data.indexOf(data.find(item => item.name === validated));

        // Apos isso vemos se a posicao e maior que -1 (sinalizando que o elemento existe)
        if (index > -1) { 
            data.splice(index, 1); // Aqui utilizamos Splice para retirar o item em dada posicao.
        } else {
            // Caso o index nao seja encontrado, retornamos a mensagem Item not found
            return res.send("Item not found")
        }


        return res.send("success");

    } catch (error) {
        return res.json(error)
    }
};