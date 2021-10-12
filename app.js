const express = require('express');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/*app.use(BodyParser.urlencoded({
  extended: true
}));
app.use(BodyParser.json());*/

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Asterios application." });
});

//import routes
const apiRoutes = require("./routes/api-routes");
//Use Api routes in the App (api-routes)
app.use('/user', apiRoutes);

//connect to mongodb
//process.env.DATABASE
mongoose.connect(process.env.DATABASE, () =>
    console.log('Connect to DB.')
);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});