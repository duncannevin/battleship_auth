var express = require('express');
var router = express.Router();

router.post('/register', function(req, res, next) {
    res.send({token: 'todo', email: 'todo'});
});

router.post('/login', function(req, res) {
    res.send({token: 'todo', email: 'tody'})
})

module.exports = router;
