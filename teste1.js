const data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    const name =  req.query.name;

    // for(let i = 0; i < data.length;  i++) {
    //     if(i.name == name) {
    //         res.send(data[i]);
    //     }
    // }

    // Podemos utilizar o metodo find para retornar diretamente o nome pesquisado
    // Este metodo retorna o primeiro item onde dada expressao e verdadeira, no nosso caso, 
    // onde o nome do item e igual ao nome passado na query.
    const target = data.find(item => item.name == name)

    //Incrementando o count como pedido no teste5
    target.count++


    return res.send(target)

};

const getUsers = ( req, res, next ) => {
    
    return res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};