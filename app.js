//instancia de express
var express = require('express');  
//app
var app = express(); 
//servidor
var server = require('http').Server(app);  
//socket
var io = require('socket.io')(server); 
//puerto
var puerto = 3000;



//se enciende el servidor
server.listen(puerto,function(){
	console.log("Escuchando por el "+puerto);
});

//cuando se hace una conexion
io.on("conection",function(socket){
	console.log('Un cliente se ha conectado');
});