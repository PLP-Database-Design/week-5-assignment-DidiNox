// Initialize dependencies by declaration!
const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');
const cors = require('cors');


app.use(express.json());
app.use(cors());
dotenv.config();


// Setting Up MySQL Connection
const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

// Ensure the Connection Works!!
db.connect((err) => {
    // No connection!
    if (err) return console.log("Error while connecting to the mysql database!");

    // Connection Established!
    console.log("Connection successfully established as id: ", db.threadId);
  
});




 // Question 1 goes here

 app.get('/patients', (req, res) => {
    const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';

    db.query(query, (err, results, fields) => {
        // Unsuccessful Retrieval of Patients Details!. 
        if (err) {
            console.log(err);
            res.statusMessage(500).send('Error retrieving Data!!');
        }else{
            // Connection and Retrieval Successful!!!.
            res.send(results);
        }
        
    });
});


// Question 2 goes here
app.get('/providers', (req, res) => {
    const query = 'SELECT first_name, last_name, provider_specialty FROM providers';

    db.query(query, (err, results, fields) => {
        // Unsuccessful Retrieval of Patients Details!. 
        if (err) {
            console.log(err);
            res.statusMessage(500).send('Error retrieving Data!!');
        }else{
            // Connection and Retrieval Successful!!!.
            res.send(results);
        }
        
    });
});

// Question 3 goes here
app.get('/patients2', (req, res) => {
    const query = 'SELECT * FROM patients ORDER BY first_name ASC';

    db.query(query, (err, results, fields) => {
        // Unsuccessful Retrieval of Patients Details!. 
        if (err) {
            console.log(err);
            res.statusMessage(500).send('Error retrieving Data!!');
        }else{
            // Connection and Retrieval Successful!!!.
            res.send(results);
        }
        
    });
});

// Question 4 goes here
app.get('/providers2', (req, res) => {
    const query = 'SELECT * FROM providers ORDER BY provider_specialty';

    db.query(query, (err, results, fields) => {
        // Unsuccessful Retrieval of Patients Details!. 
        if (err) {
            console.log(err);
            res.statusMessage(500).send('Error retrieving Data!!');
        }else{
            // Connection and Retrieval Successful!!!.
            res.send(results);
        }
        
    });
});


// listen to the server
const PORT = 3000
    app.listen(PORT, () => {
    console.log(`server is runnig on http://localhost:${PORT}`);
});