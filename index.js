const express = require('express');
const fileupload = require('express-fileupload');

const app = express();

app.use(fileupload());

app.use(express.static('/'));

app.post('/upload', (req, res) => {

});