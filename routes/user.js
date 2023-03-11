const express = require('express');
const router = express.Router();

router.use(logger)

router.get('/', function (req, res) {
    res.send('Get user dashboard');
  })
  
  router.get('/new', function (req, res) {
    res.send('Get user form');
  })
  
  router.post('/', (req,res) => {
    res.send('Post to user dashboard')
  })
  
router
.route('/:id')
.get((req, res) =>{
  console.log(req.user)
  res.send(`Get user with ID = ${req.params.id}`);
})
.put((req,res) => {
  res.send(`Update user with ID =  ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Deleted user with ID = ${req.params.id}`)
})

router.param('id', (req, res, next, id) => {
  req.user = users[id]
  next()
})
  
const users = [{name: 'Fran'}, {name: 'Mauro'}]

function logger(req,res,next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
