const express = require('express');

const app = express();


app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.urlencoded({
    extended: true
}));


require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (_, res) => res.sendFile(__dirname + '/public/dist/public/index.html'));

const server = app.listen(3333, () => console.log('songs sung on 3333'));
const io = require('socket.io')(server);

// Socket Events
io.on("connection", function(socket) {

    // join user into room
    socket.on("roomName", (data => {
        console.log(data);
        socket.join(data.room);
    }))

    // Give user socket ID
    socket.on("getId", function(){
        socket.emit("hereBro", {id: socket.id });
    });

    // GET and EMIT datachunk from playing component
    socket.on("datachunk", function(data){
        io.to(data.room).emit('broadcast', data);
    })
});
