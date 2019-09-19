//Comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log("Se ha conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Se ha desconectado del servidor");
});

socket.on('estadoActual', (resp) => {
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});