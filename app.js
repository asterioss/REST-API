const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

//connect to mongodb
mongoose.connect(process.env.DATABASE, () =>
    console.log('Connect to DB.')
);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});