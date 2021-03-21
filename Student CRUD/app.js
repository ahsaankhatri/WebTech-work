const express = require('express');
const bodyParser = require('body-parser');
const student = require('./routes/student.route');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:/studentsDB', {useNewUrlParser : true, useUnifiedTopology : true})
.then(() => {
    console.log('Connected to the database!')
})
.catch(err => {
    console.log("Cannot connect to the database!", err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/students', student);

app.listen(3000,() => {console.log("The server is running at port 3000");});