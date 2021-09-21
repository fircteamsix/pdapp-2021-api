require('dotenv').config();
const express = require('express');
const routes = require('./routes');
var cors = require('cors');
var morgan = require('morgan')
const porta = process.env.PORTA || 3000;
require('./database')
const app = express();

app.use(cors())
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.use(express.json());
app.use(express.static('public'))
app.use(routes);
app.use(morgan('dev'))

app.use('/', (req, res) => {
    res.send('Olllaaa')
})

app.listen(porta, () => {
    console.log("Servidor PDApp online kinghost")
}); 
