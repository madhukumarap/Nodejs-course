const express = require('express');
const category = require('./Routes/category');
const student = require('./student/student')
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://127.0.0.1/course')
.then(()=> console.log('database is connected'))
.catch((err)=> console.log('could not connect ', err))
// Middleware for parsing JSON requests
app.use(express.json());

// Use the 'category' router mongodb://localhost:27017
app.use(category);
app.use(student)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
