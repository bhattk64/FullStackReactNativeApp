const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDb = require('../server/config/db.jsx');

//dotenv
dotenv.config();

//db
connectDb();


// rest object
const app = express();

//middle ware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Hello from server'
    })
})

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold)
})