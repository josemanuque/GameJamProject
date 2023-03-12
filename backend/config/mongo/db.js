// MongoDB Connection
const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://user1234:user1234@gamejam.dumd5i7.mongodb.net/?retryWrites=true&w=majority";
// Instancia en linea abierta para todos, si no les gusta usan localhost, asegurense de que les conecte su local. Todo funciona
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