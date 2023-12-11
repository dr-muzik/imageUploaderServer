const express = require('express');
const cors = require('cors');
const globalErrHandler = require('./middleware/errorMiddleware');

const app = express();

app.use(cors()); //enable cors in express

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "15kb" }));

const router = require('./routers/router');
const AppError = require('./utils/appError');

app.use('/', router);

app.get('/*', (req, res, next) => {
    const url = req.originalUrl;

    const err = new AppError(`this ${url} does not exit`, 404);
    next(err);
})

// calling errorMiddleware
app.use(globalErrHandler);


module.exports = app;
