const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose.connect(
    "mongodb ://localhost/usuarios",
    { useNewUrlParser: true },
    (err, res) => {

        err && console.log("error conectando ala bd");
        app.listen(4000, () => {
            console.log("servidor corriendo en http://localhost:4000");
        })
    }
);
