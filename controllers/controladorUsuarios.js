const path = require('path');



const controlador = {
    main: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'))
    },
    login : (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'))
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'))
    },
    shop: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/shop.html'))
    },
};

module.exports = controlador;