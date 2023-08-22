// api dependencies
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//wordlesim dependencies
const fs = require('fs');
const wordListPath = require('word-list');

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
    const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
    /*for(let num = 0; num < 100; num++) {
        console.log(`wordarray[${num}]: ${wordArray[num]}`);
    }*/
    let fourLetterWords = [];
    let word = "";
    for(let num = 0; num < wordArray.length; num++) {
        if(wordArray[num].length == 4) {
            process.stdout.write(`${wordArray[num]}, `);
            fourLetterWords.push(wordArray[num]);
        }
    }
    let random = Math.floor(Math.random() * fourLetterWords.length);
    word = fourLetterWords[random];
    res.send(word);
});

// starting the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});