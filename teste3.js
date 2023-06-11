const data =  require("./fakeData");

module.exports = function(req, res) {
  
    const name =  req.query.name;

    // for(let i = 0; i < data.length;  i++) {
    //     if(i.name == name) {
    //         data[i] = null;
    //     }
    // }

    // Primeiro achamos a posicao onde o objeto contendo este nome esta posicionado.
    const index = data.indexOf(data.find(item => item.name === name));

    // Apos isso vemos se a posicao e maior que -1 (sinalizando que o elemento existe)
    if (index > -1) { 
        data.splice(index, 1); // Aqui utilizamos Splice para retirar o item em dada posicao.
    } else {
        // Caso o index nao seja encontrado, retornamos a mensagem Item not found
        return res.send("Item not found")
    }


    return res.send("success");

};