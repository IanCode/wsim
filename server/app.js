// api dependencies
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');



var port = 3001;

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
  res.send(ads);
});

// endpoint to get the random word
app.get('/getword', (req, res) => {
    var wordGenerator = require('./wordgenerator');
    var word = wordGenerator.generateWord();
    res.send(word);
});

// starting the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});