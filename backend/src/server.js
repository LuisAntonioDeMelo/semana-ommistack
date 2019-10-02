const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');

// GET,POST,DELETE,PUT

// request.query = Acessar os parametros pela requisição
// request.params = Acessar a route params(edit, delete)
// request.body = Acessar o corpo da requisição

mongoose.connect('mongodb+srv://luis:luis7410@cluster0-b0hh1.mongodb.net/semana09?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true}
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);