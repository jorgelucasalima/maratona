const express = require("express");
const server = express();

//request, response
server.get('/', (request, response) => {
    console.log('entrei no index')

    return response.send('Oie')
})


server.listen(3000, () => console.log('rodando.'))