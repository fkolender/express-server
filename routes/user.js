const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Got a GET request at /user');
  })
  
router.get('/new', function (req, res) {
    res.send('Got a GET request at /user/new');
  })

router.post('/', (req,res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    res.send(`GET user with ID = ${req.params.id}`)
}) // dynamica routing for users


module.exports = router
