const express = require('express')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http)
const cors = require('cors')


const { addPlayer, removePlayer, getPlayer, getPlayersInRoom } = require('./players.js');
const players = require('./players.js');


app.use(cors())


app.get('/', (req, res) => {
    res.send('allGood')
})


io.on('connection', (socket) => {
    
    socket.on('join', ({name, room}, callback) => {
        
        const {error, player} = addPlayer({id : socket.id, name, room})
        
        if (error) return callback(error);

        socket.join(player.room);

        socket.broadcast.to(player.room).emit('message', { player: 'admin', text: `${player.name} has joined!` });
        io.to(player.room).emit('roomData', { room: player.room, players: getPlayersInRoom(player.room) });
      
    io.to(player.room).emit('roomData', { room: player.room, players: getPlayersInRoom(player.room) });

    callback();

  
    })


    socket.on('sendPaint', (data, callback) => {
   
        
        const player = getPlayer(socket.id);
       
        socket.broadcast.to(player.room).emit('paint', {player : player.name, paintDataBuffer : data})
        
    })

    socket.on("gameStarted", () => {
        console.log("serverGame")
        const player = getPlayer(socket.id)
        io.to(player.room).emit("gameStarted")
    })

    socket.on("chosenWord", (data) => {
        console.log("hi", data)
        const player = getPlayer(socket.id)
        socket.broadcast.to(player.room).emit('chosenWord', data)
    })

    socket.on('disconnect', () => {
        const player = removePlayer(socket.id);
    
        if(player) {
          io.to(player.room).emit('message', { player: 'Admin', text: `${player.name} has left.` });
          io.to(player.room).emit('roomData', { room: player.room, players: getPlayersInRoom(player.room)});
        }
      })

   
})


http.listen( process.env.PORT|| 8080, () => {
    console.log("listening")
})