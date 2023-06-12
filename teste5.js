const fakeData = require("./fakeData");
const { teste5Schema } = require("./schemas");


module.exports = function(req, res){
    try {
        const validated = teste5Schema.parse(req.query.name)
        const target = fakeData.find(item => item.name === validated)

        res.send(`Usuario ${target.name} foi lido ${target.count} vezes`);

    } catch (error) {
        return res.json(error)
    }
};