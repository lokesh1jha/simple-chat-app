const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'))
});

router.post('/login', (req, res, next) => {
    // console.log(req.body);
    
    res.redirect('/send');
});

module.exports = router;