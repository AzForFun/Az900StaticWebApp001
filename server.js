/* server.js */
/* https://docs.microsoft.com/en-ie/azure/active-directory/develop/tutorial-v2-javascript-spa */

const express = require('express');
const morgan = require('morgan');
const path = require('path');

//initialize express.
const app = express();

// Initialize variables.
const port = 3000; // process.env.PORT || 3000;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
app.use(express.static('MS600-MSId001'))

// Set up a route for index.html.
app.get('*', function (req, res) {
    // res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + (req.path==="/"?'/index.html':req.path)));
    console.log('req: '+ req.path);
});

// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...');