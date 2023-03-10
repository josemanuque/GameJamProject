const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
    {
        username: {
            type: String, required: true, unique: true
        },
        email: {
            type: String, required: true, unique: true
        },
        password: {
            type: String, required: true
        },
        token: {
            type: String, required: false
        }
    },
    {
        versionKey: false,
    }
)

module.exports = mongoose.model('user', UserScheme)