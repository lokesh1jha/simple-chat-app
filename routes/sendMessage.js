const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/send', (req, res, next) => {
    let message = req.body.message;
    // res.sendFile(path.join(__dirname, '..', 'views', 'login.html'))
});


module.exports = router;