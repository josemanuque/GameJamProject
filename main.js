const express = require('express');
const cors = require('cors');
const path = require("path");
const userSch = require("./backend/app/models/user_model");
const userRoutes = require("./backend/app/routes/user_routes");
const initMongoDB = require('./backend/config/mongo/db');


const app = express();
initMongoDB();

const viewsPath = path.join(__dirname, '/frontend');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", viewsPath);

// Disable CORS for all routes
app.use(cors({ origin: '*' }));

app.listen(3000, (req, res) => {
    console.log("Listening on port 3000");
})

// Routes //
app.use('/api/v1/auth', userRoutes);

