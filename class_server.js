// Initiliasing dependencies by declaration

const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');



app.use(express.json());
app.use(cors());
dotenv.config();


// Connect to the Database!

//Initialize the Database
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);




// Check if the Database connection works!!!
db.connect((err) => {
    // No connection!
    if (err) return console.log("Error while connecting to the mysql database!");

    // Connection Established!
    console.log("Connection successfully established as id: ", db.threadId);

    

    app.listen(process.env.PORT, () => {
        console.log(`Server is runnig on http://localhost:${process.env.PORT}`);

        // Send a message to the browser to verify port is listening
        console.log('Sending message to the broswer...');
        app.get('/', (req,res) => {
            res.send('Server started successfully!!!');
        });

    });
});

