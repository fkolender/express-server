const express = require("express")
const app = express()
const port = 5000

app.set('view engine', 'ejs') 
app.use(express.static("source")) // Auto finds static file tree to serve.

app.get('/', function (req, res) {
  res.render('index', {server: 'Express.js'})
  })

app.post('/', function (req, res) {
    res.send('Got a POST request at /').sendStatus(500)
  })

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
}); 
