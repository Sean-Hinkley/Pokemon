const db = require('./db.js');
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

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://<db_username>:<Kamehameha!1>@school.9eciq.mongodb.net/?retryWrites=true&w=majority&appName=School';

MongoClient.connect(connectionString, {autoSelectFamily : false}).then(client => {
    console.log('Connected to DB');
    const db = client.db('pokemon');
    const employeesCollection = db.collection('users');


    

}).catch(error => console.error(error))


const io = new Server(server, {

});

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.on('userlogged', (socket) => {
        console.log("hello");
    })
});





server.listen(3000, () => {
    console.log('started on: http://localhost:3000');
})

