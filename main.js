const express = require('express');
const app = express();
const path = require("path");
//const hbs = require("hbs");
const userSch = require("./backend/app/models/user_model");

const initMongoDB = require('./backend/config/mongo/db');
initMongoDB();
const viewsPath = path.join(__dirname, '/frontend');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.set("view engine", "hbs");
app.set("views", viewsPath);


app.listen(3000, (req, res) => {
    console.log("Listening on port 3000");
})


app.get('/', (req, res) => {
    res.sendFile('frontend/index.html', { root: __dirname });
});

app.get('/register', (req, res) => {
    res.sendFile('frontend/register.html', { root: __dirname });
});

app.post('/register', async (req, res) => {

    const check = await userSch.findOne({ "$or": [{ username: req.body.username }, { email: req.body.email }] });
    if (check) {
        return res.send("Nombre de usuario o email existentes");
    }

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    await userSch.insertMany([data]);
    res.sendFile('frontend/index.html', { root: __dirname });



});