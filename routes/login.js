const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'))
});

router.post('/login', (req, res, next) => {
    console.log(req.body);
    var username = req.body.username;
    localStorage.setItem('username', JSON.stringify(username));
    console(username, localStorage.getItem('username'));
    res.redirect('/');
});

module.exports = router;