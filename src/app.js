// This is the starting point to launch the server

// Imports
const express = require('express')
const { router } = require('./router');
const dbconnection = require('./models/dbconnection')


// Import environment variables
require('dotenv').config();

// Start DB
dbconnection.connect();

const app = express();
app.set('view engine', 'ejs');

app.use('/bootstrap-style', express.static('./node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use('/jquery-js', express.static('./node_modules/jquery/dist/jquery.slim.min.js'));
app.use('/popper-js', express.static('./node_modules/@popperjs/core/dist/umd/popper.min.js'));
app.use('/bootstrap-js', express.static('./node_modules/bootstrap/dist/js/bootstrap.min.js'));

app.use(router);

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening on localhost:${process.env.SERVER_PORT}`);
});