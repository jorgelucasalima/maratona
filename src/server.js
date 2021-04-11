const express = require("express");
const server = express();
const routes = require("./routes")


//usando template engine ejs
server.set('view engine', 'ejs');

//habilitar arquivos statics-estaticos
server.use(express.static("public"))

//usando req.body 
server.use(express.urlencoded({extend: true}));

//routes
server.use(routes)

//porta 3000
server.listen(3000, () => console.log('rodando.'))