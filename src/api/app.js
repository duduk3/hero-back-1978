const express = require('express');
const rescue = require('express-rescue');
const cors = require('cors');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(cors());

app.get('/users', rescue(UserController.getAll));
app.get('/:id', UserController.getById);
app.post('/users', UserController.create);
app.post('/:id', UserController.remove);

app.use(errorMiddleware); 

module.exports = app;
