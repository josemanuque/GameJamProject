const express = require('express');
const initMongoDB = require('./config/mongo/db');

const app = express();

app.listen(3000, (req, res)=>{
    console.log("Listening on port 3000");
})

initMongoDB();