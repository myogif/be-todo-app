var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const activitesRouter = require('./routes/activites.routes');
const todosRouter = require('./routes/todos.routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/activity-groups', activitesRouter);
app.use('/todo-items', todosRouter);

module.exports = app;
