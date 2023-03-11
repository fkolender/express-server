const express = require("express");
const app = express();
const port = 5000;

app.get('/', function (req, res) {
    res.send('Welcome to my little Express server.')
  })

app.post('/', function (req, res) {
    res.send('Got a POST request at /')
  })

app.get('/user', function (req, res) {
    res.send('Got a GET request at /user')
  })

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 
