const fakeData = require("./fakeData");


module.exports = function(req, res){
    
    const name =  req.query.name;
    const target = fakeData.find(item => item.name === name)

    res.send(`Usuario ${target.name} foi lido ${target.count} vezes`);

};