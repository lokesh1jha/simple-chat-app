const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const login = require('./routes/login');
const sendChat = require('./routes/sendMessage');

app.use(bodyParser.urlencoded({extended: false}));

app.use(login);
app.use(sendChat);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);