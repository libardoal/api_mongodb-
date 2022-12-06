const UserController =require("../controllers/users")
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const users = require ('./api/users');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use("/api/users", users);

mongoose.connect(
    "mongodb://localhost/usuarios",
    {useNewUrlParser: true },
    (error, res) => {
        err && console.log ("error conectado ala bd");
        app.listen (4000,()=> {
            console.log ("servidor corriendo en http:localhost:4000");

        });
    }
);