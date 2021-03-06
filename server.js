const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const cors = require('cors');

// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/op', (req, res)=>{
    controllers.operationals.getAllOP(req, res);
});
app.get('/op/7', (req, res)=>{
    controllers.operationals.getOP7(req, res);
});

app.post('/op', (req, res)=>{
    controllers.operationals.addOP(req, res);
});

app.get('*', (req, res) => res.status(200).send({
message: 'Welcome to the beginning of nothingness.',
}));


const port = parseInt(process.env.PORT, 10) || 4300;
app.set('port', port);
const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Server is UP. Listening ${port}`);
});
module.exports = app;