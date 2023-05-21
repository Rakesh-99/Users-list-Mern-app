const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');
const morgan = require('morgan');
const path = require('path');



// Middleware

server.use(express.json());
server.use(cors());
server.use('/', userRoutes.router);
server.use(morgan('dev'));
server.use(express.static('index.html'));
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});




server.listen(8000, () => {
    console.log('Server Started !');
})


