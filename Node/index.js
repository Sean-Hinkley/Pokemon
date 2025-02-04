const express = require('express');
const bodyParser = require('body-parser');
const {Server} = require('socket.io');
const http = require('http');
const app = express();
const server = http.createServer(app);
app.set('view engine', 'ejs');




app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/graphics', (req, res) => {
    res.render('graphics.ejs');
})


const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`user Connected: ${socket.id}`);
})

server.listen(3000, () => {
    console.log(`started on : http://localhost:3000`);
})