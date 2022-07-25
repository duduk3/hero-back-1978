const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(cors());

app.get('/users', rescue(UserController.getAll));
app.get('/users/:id', rescue(UserController.getById));
app.post('/users', rescue(UserController.create));
app.delete('/users/:id', rescue(UserController.remove));

app.use(errorMiddleware); 

module.exports = app;
