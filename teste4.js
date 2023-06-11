const data =  require("./fakeData");

module.exports =  function(req, res) {
  
    const id =  req.query.id;

    // const reg = data.find(d => id == id);
    // reg.name = req.body.name;
    // reg.job = req.body.job;

    // Primeiro encontramos o usuario com dado Id, lembrando de converter para Number pois 
    // query params sao string por padrao
    const objectToUpdate = data.find(item => item.id === Number(id));
    console.log(objectToUpdate)

    // Setamos as novas propriedades em um novo objeto, e utilizamos spread operator para manter todas as outras propriedades
    // que nao foram sobrescritas como Id
    const updatedProperties = {
        ...objectToUpdate,
        name: req.body.name,
        job: req.body.job,
    }

    console.log(updatedProperties)

    if (objectToUpdate) {
        // Atualizamos as propriedades do objeto encontrado e utilizamos Object.assign para sobrescrever
       const testing =  Object.assign(objectToUpdate, updatedProperties);
       console.log(testing)
    } else {
        return res.send("User not found")
    }

    return res.send(objectToUpdate);

};