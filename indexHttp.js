const http = require('http');
const handleServer = function (req, res) {
    res.writeHead(200);
    res.write('<h1> Hola mundo desde </h1>');
    res.end();
};
const server  = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Escuchando en el puerto 3000'.yellow);
});
console.log('hola'.yellow);
