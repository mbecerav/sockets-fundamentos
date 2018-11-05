var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
})

//ON es para escuchar 
socket.on('disconnect', function(){
    console.log('Se perdio la conexion con el servidor');
})

//EMIT para emitir informacion 'Solo al SERVIDOR'
/*socket.emit('enviarMensaje', {
    nombre: 'Fernando',
    mensaje: 'Hola Mundo Sockets'
}, function( resp ){
    console.log( 'respuesta server:', resp )
});*/

// para escuchar informacion desde el SERVIDOR
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});