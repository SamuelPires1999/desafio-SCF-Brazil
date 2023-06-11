const data =  require("./fakeData");

module.exports = function(req, res){
    // O Codigo deste caso nao atenderia o esperado pois a propriedade job estava sendo inserida com o nome errado.
    // Alem de que a propriedade ID nao era informada, considerando que estamos trabalhando com um array estatico, temos que informa-la para manter o padrao dos objetos ja inseridos.
    const name =  req.body.name;
    const job =  req.body.job;
    const id = req.body.id;
    
    const newUser = {
        id, name, job
    }

    data.push(newUser)
    
    return res.send(newUser);

};