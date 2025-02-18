require('dotenv').config();
const express = require('express');
const app = express();

const teste1 = require("./teste1");
const teste2 = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");
const fakeData = require('./fakeData');
const { signJWT } = require('./jwt');
const checkAuth = require('./checkAuth');

app.use(express.json());

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

// Rota para assinar um token utilizando as informacoes do usuario
app.post("/authenticate", (req, res) => {
  const user = fakeData.find(item => item.name === req.body.name)

  if(!user) {
    return res.send('User not found')
  }
  const token = signJWT(user)

  return res.json({
    token
  })
})

app.get("/user",teste1.getUser);
app.get("/users",teste1.getUsers);
app.post("/users", teste2)
app.delete("/users", checkAuth ,teste3)
app.put("/users",  checkAuth ,teste4)
app.get("/users/access", teste5);


const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});

module.exports = app