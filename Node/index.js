const game = require('./game.js');
const express = require('express');
const session = require('express-session');
const http = require('http');
const expressLayouts = require('express-ejs-layouts')
const {Server} = require('socket.io');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://seanhinkley567:hi6yIe40@school.9eciq.mongodb.net/?retryWrites=true&w=majority&appName=School";
const app = express();
const server = http.createServer(app);

app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




MongoClient.connect(connectionString, {autoSelectFamily : false}).then(client => {
    console.log('Connected to DB');
    const db = client.db('pokemon');
    const usersCollection = db.collection('users');
    app.use(session({
        secret: "ss",
        resave: false,
        saveUninitialized: true,
    }));
    
    app.get('/', (req,res) => {
        console.log(req.session.username);
        res.render('index.ejs', {title: 'Home Page'});
    })
    
    
    app.get('/createUser', (req,res) => {
        res.render('users/createUser.ejs', {title: 'CreateUser'});
        
    });
    
    app.get('/login', (req,res) => {
        res.render('users/login.ejs', {title: 'Login'});
        
    });
    
    

    //Users
    app.get('/users', (req,res) => {
        usersCollection.find().toArray()
        .then(usersData => {
            res.render('users/users.ejs', {users: usersData, title:"Users"})
        }).catch(/* */);
    });


    app.post('/user', (req,res) => {
        usersCollection.insertOne(req.body)
        .then(result => {
            //res.redirect('/');
        })
        .catch(error => console.error(error))
    })

    app.post('/checkuser', (req,res) => {
        usersCollection.findOne(req.body)
        .then(result => {
            if(result) {
                req.session.username = result.username;
            } else {
                res.status(401).send("Invalid Credentials");
            }
            
        })
        .catch(error => console.error(error))
    })

    app.get('/logout', (req, res) => {
        req.session.destroy(err => {
            if (err) {
                return res.redirect('/');
            }
                res.clearCookie('connect.sid');
                res.redirect('/');
        });
    });


    app.get('/game', (req,res) => {
        if(req.session.username) {
            console.log(req.session.username);
            res.render('graphics.ejs', {title: 'Game'});
        } else {
            res.redirect('/login');
        }
        
        
    });
    


}).catch(error => console.error(error))


const io = new Server(server, {

});

io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.on('gameStart', (socket) => {
        console.log("Started");
    });
});





server.listen(3000, () => {
    console.log('started on: http://localhost:3000');
})

