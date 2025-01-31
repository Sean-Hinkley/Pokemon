const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const connectionString = "mongodb+srv://sean:hi6yIe40@school.9eciq.mongodb.net/?retryWrites=true&w=majority&appName=School";

MongoClient.connect(connectionString, {autoSelectFamily : false}).then(client => {
    console.log('Connected to DB');
    const db = client.db('company');
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(express.static('public'));

    app.get('/', (req, res) => {
        res.render('index.ejs');
        
    })

    

    const port = 3000;
    app.listen(port, function() {
        console.log(`server on http://localhost:${port}`)
    })
}).catch(error => console.error(error))

