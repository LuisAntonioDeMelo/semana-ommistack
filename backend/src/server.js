const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb+srv://luis:luis7410@cluster0-b0hh1.mongodb.net/semana09?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true}
);


// GET,POST,DELETE,PUT

// request.query = Acessar os parametros pela requisição
// request.params = Acessar a route params(edit, delete)
// request.body = Acessar o corpo da requisição


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);