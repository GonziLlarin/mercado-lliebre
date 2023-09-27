const express = require('express');
const path = require('path');
const app = express();
const rutasShop = require('./routes/shop');
const rutasLogin = require('./routes/login');
const rutasRegister = require('./routes/register');
const rutasMain = require('./routes/main');


app.use(express.static('public'));
app.use('/', rutasMain);
app.use('/', rutasRegister);
app.use('/', rutasLogin);
app.use('/', rutasShop);

const port = process.env.PORT ||3001;
app.listen(port, () => {
    console.log('Servidor iniciado en http://localhost:' + port);
});