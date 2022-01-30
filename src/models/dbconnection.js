const mongoose = require('mongoose');

// Import environment variables
require('dotenv').config();

let connected = false;

async function connect() {
    if (!connected) {
        const uri = `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_SCHEMA}`;
        await mongoose.connect(uri);
        console.log(`Succesfully connected to ${uri}`)
        connected = true;
    }
    return mongoose;
}

mongoose.connection.on('close', () => {
    console.log("Closed DB connection");
});
exports.connect = connect;

