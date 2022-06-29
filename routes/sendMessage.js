const express = require('express');
const path = require('path');

// const data = require('./data');
const body = require('body-parser');

const router = express.Router();

router.get('/send', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'sendChat.html'))
});

router.post('/send', (req, res, next) => {
    console.log(req.body);
    res.send('<h1>Message Sent.</h1>');
});


module.exports = router;