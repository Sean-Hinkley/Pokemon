const express = require('express');
const http = require('http');
const expressLayouts = require('express-ejs-layouts')
const {Server} = require('socket.io');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index.ejs', {title: 'Home Page'});
})

app.get('/game', (req,res) => {
    res.render('graphics.ejs', {title: 'Game'});
    
})




const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);
    const lis = document.querySelector('.users');
    const it = document.createElement("li");
    it.innerHTML = socket.id; 
    if(lis!=null) {
        lis.appendChild(it);
    }
});

server.listen(3000, () => {
    console.log('started on: http://localhost:3000');
})