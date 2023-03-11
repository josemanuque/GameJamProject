// MongoDB Connection
const mongoose = require('mongoose');
const DB_URL = `mongodb://127.0.0.1/gameJam`

const connect = async () => {
    try{
        mongoose.connect(DB_URL)
        console.log('Mongo connected')
    }catch(error){
        console.log(error);
        process.exit()
    } 
}

module.exports = connect