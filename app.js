const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors()); //enable cors in express

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "15kb" }));

const router = require('./routers/router');

app.use('/', router);


module.exports = app;
