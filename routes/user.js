const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Get user dashboard');
  })
  
router.get('/new', function (req, res) {
    res.send('Get user form');
  })

router.post('/', (req,res) => {
    res.send('Post to user dashboard')
})

router.route('/:id')
.get((req, res) =>{
  res.send(`Get user with ID = ${req.params.id}`);
})
.put((req,res) => {
  res.send(`Update user with ID =  ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Deleted user with ID = ${req.params.id}`)
})

module.exports = router
