// MongoDB Connection
const mongoose = require('mongoose');
const DB_URL = ``

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URL,
            (err) => {
                if (err){
                    console.log('DB: ERROR');
                } else {
                    console.log('Mongo\'s Working!');
                }
            }
        ) 
        }
    connect();
};