// Initial setup
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/router');
const faqs = require('./data/faqs.json');

// Useful libraries
const fs = require('fs');
require('dotenv').config({
  silent: true, path: path.join(__dirname, '.env'),
}); // Stores custom environmental variables
const morgan = require('morgan'); // Logs incoming HTTP requests
const cors = require('cors'); // Enables CORS
const multer = require('multer'); // Handles file uploads
const PUBLIC_DIR = path.join(__dirname, `../public`);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PUBLIC_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${req.body.userId}${path.extname(file.originalname)}`);
  }
});
const upload = multer({storage: storage});

const mongoose = require('mongoose'); // Database
// Middleware
app.use('/static', express.static(PUBLIC_DIR)); // Serves static files
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({
  extended: true,
})); // Parses incoming request body
app.use(morgan('dev')); // Sets logging mode
app.use(cors()); // Enables CORS
app.use('/', router);

app.get('/faqs', (req, res) => {
  res.send(faqs);
})

app.post('/contact', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.redirect(`${process.env.FRONT_END_URL}`);
});

app.post('/register', (req, res) => {
  console.log(req.body);
  res.redirect(`${process.env.FRONT_END_URL}/login`);
});

app.post('/personalize', (req, res) => {
  console.log(req.body);
  res.redirect(`${process.env.FRONT_END_URL}/settings`);
});

app.post('/security', (req, res) => {
  console.log(req.body);
  res.redirect(`${process.env.FRONT_END_URL}/settings`);
});

app.get('/avatar/:userId', (req, res) => {
  res.json({'url': `avatar-${req.params.userId}.jpg`}); // extension shouldn't be hardcoded but this is just placeholder code until MongoDB has been implemented
});

app.post('/avatar', upload.single('avatar') , (req, res) => {
  res.json({});
});

// added mongoDB connection code.
mongoose.connect(`${process.env.MONGODB_CONNECTION_KEY}`)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

module.exports = app;


